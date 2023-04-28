import { BaseSyntheticEvent, FC, useState } from 'react';
import './App.css';
import Header from './components/Header';
import FindAddress from './components/FindAddress';
import Footer from './components/Footer';
import Map from './components/Map';
import * as arcgisService from './services/arcgisService';
import ErrorBoundary from './utils/ErrorBoundary';

const centerMap = [23.321590139866355, 42.697866831005435];//TODO Location SOFIA BULGARIA
const zoomMap = 8;
const App: FC = () => {


  const [findAddresses, setFindAddresses] = useState<string[] | undefined>([]);
  const [center, setCenter] = useState(centerMap);
  const [zoom, setZoom] = useState<number>(zoomMap);
  const [longitude, setLongitude] = useState<number | undefined>(undefined);
  const [latitude, setLatitude] = useState<number | undefined>(undefined);



  const onHandleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const address = formData.get('address');


    if (address !== null && (typeof address === 'string')) {

      await arcgisService.findAddress(address).then((data) => {

        let x = data.candidates[0].location.x;
        let y = data.candidates[0].location.y;

        setCenter([x, y]);
        setZoom(12);
        setLatitude(y);
        setLongitude(x);


      }).catch((err) => {
        console.log(err)
      });

    };

  };



  const onHandleChange = async (e: BaseSyntheticEvent) => {

    const address = e.target as HTMLInputElement;

    if (typeof address.value === "string" && address.value.trim() !== "") {


      await arcgisService.findSuggestAdress(address.value).then((data) => {
        setFindAddresses(data.suggestions);

      }).catch((err) => {
        console.log(err);
      })

    } else {
      setFindAddresses(undefined);
    };
  };


  const handleClickSuggestion = (e: BaseSyntheticEvent<object, any, any>) => {
    const seggestion = e.target as HTMLLIElement;
    const input = document.getElementsByTagName('input')[0];
    input.value = seggestion.innerText;
    setFindAddresses([]);//TODO SHOW or HIDE suggestions ?
  };



  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <main>
          <Map center={center} zoom={zoom} longitude={longitude} latitude={latitude} />
          <FindAddress
            findAddresses={findAddresses}
            onHandleSubmit={onHandleSubmit} onHandleChange={onHandleChange}
            handleClickSuggestion={handleClickSuggestion} />
        </main>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
