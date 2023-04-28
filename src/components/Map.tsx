import MapView from "esri/views/MapView";
import { FC, ReactElement, useEffect, useRef } from "react";
import { loadModules } from 'esri-loader';
import './Map.css';
import { Box } from "@mui/material";

interface MapProps {
    center: number[],
    zoom: number,
    longitude: number | undefined,
    latitude: number | undefined
}



const Map: FC<MapProps> = ({ center, zoom, longitude, latitude }): ReactElement => {


    const MapEl = useRef<HTMLDivElement>(null);


    useEffect(() => {

        let view: MapView | null;
        let point: {} | null;


        loadModules(["esri/views/MapView", "esri/WebMap", "esri/Graphic", "esri/layers/GraphicsLayer", "esri/symbols/WebStyleSymbol"], {

            css: true

        }).then(([MapView, WebMap, Graphic, GraphicsLayer, WebStyleSymbol]) => {

            const webmap = new WebMap({
                basemap: 'streets-vector'
            });


            view = new MapView({
                map: webmap,
                center: center,
                zoom: zoom,
                container: MapEl.current
            });


            const graphicsLayer = new GraphicsLayer();

            webmap.add(graphicsLayer);


            if (latitude && longitude) {

                point = {
                    type: "point",
                    longitude: longitude,
                    latitude: latitude
                };
            };


            const webStyleSymbol = new WebStyleSymbol({
                name: "push-pin-1",
                styleName: "Esri2DPointSymbolsStyle"
            });


            const pointGraphic = new Graphic({
                geometry: point,
                symbol: webStyleSymbol
            });


            graphicsLayer.add(pointGraphic);
        });

        return () => {

            if (!!view) {
                view.destroy()
                view = null
            };
        };


    }, [center, zoom]);


    return (
        <Box>

        <div className='map' ref={MapEl} style={{ width: '75%', height: '400px', margin: '10px', padding: '0' }}>
        </div>
        </Box>
    );
};

export default Map;

