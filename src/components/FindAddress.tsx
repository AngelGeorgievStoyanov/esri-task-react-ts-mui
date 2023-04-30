import { BaseSyntheticEvent, FC, ReactElement } from "react";
import { Box, Button, List, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";

interface FindAddressProps {

    onHandleSubmit: (e: BaseSyntheticEvent) => Promise<void>,
    onHandleChange: (e: BaseSyntheticEvent) => Promise<void>,
    findAddresses: string[] | undefined,
    handleClickSuggestion: (e: React.MouseEvent<HTMLSpanElement>) => void

}

const FindAddress: FC<FindAddressProps> = ({ onHandleSubmit, onHandleChange, findAddresses, handleClickSuggestion }): ReactElement => {



    return (

        <Box component="form" sx={{
            display: 'flex', flexDirection: 'column', width: '350px', minHeight: 'auto',
            border: 'solid 1px', padding: '20px',
            backgroundColor: '#d1dcdc',
            boxShadow: '2px 2px 4px black',
            margin: '10px',
            '@media(max-width: 530px)': { display: 'flex', width: '65%' }
        }} onSubmit={onHandleSubmit} >



            <Box sx={{ display: 'flex', flexDirection: 'column', height: '150px', justifyContent: 'space-around', boxSizing: 'border-box' }}>
                <Typography variant="h6">
                    Търсене на адрес
                </Typography>
                <TextField type="text" name="address" onChange={onHandleChange} />
                <Button variant="contained" type='submit' sx={{ ':hover': { background: '#4daf30' } }} >Намери на картата</Button>

            </Box>

            {(findAddresses !== undefined) ?

                <List>
                    {findAddresses.map((x: any, i) =>
                        <ListItemButton key={x.text}>
                            <ListItemText onClick={handleClickSuggestion} primary={x.text} key={i} />
                        </ListItemButton>
                    )
                    }</List>



                : ''}

        </Box >
    )
}

export default FindAddress;