import { BaseSyntheticEvent, FC, ReactElement } from "react";
import './FindAddress.css';
import { Box, Button,  TextField, Typography } from "@mui/material";

interface FindAddressProps {

    onHandleSubmit: (e: BaseSyntheticEvent) => Promise<void>,
    onHandleChange: (e: BaseSyntheticEvent) => Promise<void>,
    findAddresses: string[] | undefined,
    handleClickSuggestion: any

}

const FindAddress: FC<FindAddressProps> = ({ onHandleSubmit, onHandleChange, findAddresses, handleClickSuggestion }): ReactElement => {



    return (

        <Box component="form" sx={{
            display: 'flex', flexDirection: 'column', width: '350px', minHeight: 'auto',
            border: 'solid 1px', padding: '20px',
            backgroundColor: '#d1dcdc',
            boxShadow: '2px 2px 4px black',
            marginBottom: '10px'

        }} onSubmit={onHandleSubmit} >



            <Box sx={{ display: 'flex', flexDirection: 'column', height: '150px', justifyContent: 'space-around', boxSizing: 'border-box' }}>
                <Typography variant="h6">
                    Търсене на адрес
                </Typography>
                <TextField type="text" name="address" onChange={onHandleChange} />
                <Button variant="contained" type='submit' sx={{ ':hover': { background: '#4daf30' } }} >Намери на картата</Button>

            </Box>

            {(findAddresses !== undefined) ? findAddresses.map((x: any) => <li className='form-li-suggestion' key={x.text} onClick={handleClickSuggestion}>{x.text}</li>) : ''}

        </Box >
    )
}

export default FindAddress;