import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Grid} from '@mui/material'
import Button from '@mui/material/Button';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxHeight: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};

const channels = [
    {"Channel ID": 1, "Name": "Moldova 1 HD"},
    {"Channel ID": 2, "Name": "Jurnal TV HD"},
    {"Channel ID": 3, "Name": "TV 8 HD"},
    {"Channel ID": 4, "Name": "PRO TV Chisinau HD"},
    {"Channel ID": 5, "Name": "TVR Moldova HD"},
    {"Channel ID": 6, "Name": "R LIVE TV HD"},
    {"Channel ID": 7, "Name": "One TV HD"},
    {"Channel ID": 8, "Name": "Star TV HD"},
    {"Channel ID": 9, "Name": "N4 HD"},
    {"Channel ID": 10, "Name": "TV5 Monde HD"},
    {"Channel ID": 11, "Name": "Cinema 1 HD"},
    {"Channel ID": 12, "Name": "Moldova 2 HD"},
    {"Channel ID": 13, "Name": "Privesc.eu HD"},
    {"Channel ID": 14, "Name": "Mega TV HD"},
    {"Channel ID": 15, "Name": "Premiera TV HD"},
    {"Channel ID": 16, "Name": "Next TV HD"},
    {"Channel ID": 17, "Name": "Exclusiv TV HD"},
    {"Channel ID": 18, "Name": "7TV HD"},
    {"Channel ID": 19, "Name": "TV9 HD"},
    {"Channel ID": 20, "Name": "GRT HD"},
    {"Channel ID": 21, "Name": "TVC 21"},
    {"Channel ID": 22, "Name": "Vocea Basarabiei HD"},
    {"Channel ID": 23, "Name": "AXIAL HD"},
    {"Channel ID": 24, "Name": "Global 24 HD"},
    {"Channel ID": 25, "Name": "Canal Regional"},
    {"Channel ID": 26, "Name": "Cotidianul TV HD"},
    {"Channel ID": 27, "Name": "National TV"},
    {"Channel ID": 28, "Name": "TeleMoldova+ HD"},
    {"Channel ID": 29, "Name": "B1 TV HD"},
    {"Channel ID": 30, "Name": "Moldova TV (Romania)"},
    {"Channel ID": 31, "Name": "A7 HD"},
    {"Channel ID": 32, "Name": "Iнтер+ HD"},
    {"Channel ID": 33, "Name": "Freedom"},
    {"Channel ID": 34, "Name": "RAI 1 HD"},
    {"Channel ID": 35, "Name": "France 2 HD"},
    {"Channel ID": 36, "Name": "TVE Internacional HD"},
    {"Channel ID": 37, "Name": "RTL HD"},
    {"Channel ID": 71, "Name": "Studio-L HD"},
    {"Channel ID": 72, "Name": "Drochia TV"},
    {"Channel ID": 73, "Name": "Soroca TV"},
    {"Channel ID": 74, "Name": "Elita TV"},
    {"Channel ID": 101, "Name": "viju TV1000 HD"},
    {"Channel ID": 102, "Name": "viju TV1000 action HD"},
    {"Channel ID": 103, "Name": "viju TV1000 русское HD"},
    {"Channel ID": 104, "Name": "viju+ Megahit HD"},
    {"Channel ID": 105, "Name": "viju+ Premiere HD"},
    {"Channel ID": 106, "Name": "viju+ Comedy HD"},
    {"Channel ID": 107, "Name": "viju+ Serial HD"},
    {"Channel ID": 108, "Name": "viju TV1000 новелла HD"},
    {"Channel ID": 109, "Name": "TV1000 Balkan (RO)"},
    {"Channel ID": 110, "Name": "BBC First HD"},
    {"Channel ID": 111, "Name": "ACASA HD"},
    {"Channel ID": 112, "Name": "ACASA GOLD HD"},
    {"Channel ID": 113, "Name": "FX HD"},
    {"Channel ID": 114, "Name": "FX Life HD"},
    {"Channel ID": 115, "Name": "Comedy Central"},
    {"Channel ID": 116, "Name": "Кино ТВ HD"},
    {"Channel ID": 117, "Name": "Киномикс HD"},
    {"Channel ID": 118, "Name": "Кинопремьера HD"},
    {"Channel ID": 119, "Name": "Кинохит HD"},
    {"Channel ID": 120, "Name": "Киносемья HD"},
    {"Channel ID": 121, "Name": "Мужское Кино HD"},
    {"Channel ID": 122, "Name": "Кинокомедия HD"},
    {"Channel ID": 123, "Name": "Родное Кино"},
    {"Channel ID": 124, "Name": "Наше Новое Кино HD"},
    {"Channel ID": 125, "Name": "Индия HD"},
    {"Channel ID": 126, "Name": "Cinema HD"},
    {"Channel ID": 127, "Name": "FilmuaDrama HD"},
    {"Channel ID": 128, "Name": ".Red HD"},
    {"Channel ID": 129, "Name": ".Black HD"},
    {"Channel ID": 130, "Name": ".Sci-fi HD"},
    {"Channel ID": 201, "Name": "Minimax"},
    {"Channel ID": 202, "Name": "Gurinel TV HD"},
    {"Channel ID": 203, "Name": "Детский Мир HD"},
    {"Channel ID": 204, "Name": "Мульт HD"},
    {"Channel ID": 205, "Name": "Nickelodeon (RO/RU)"},
    {"Channel ID": 206, "Name": "Cartoonito (RO/RU) HD"},
    {"Channel ID": 207, "Name": "Disney Channel (RO)"},
    {"Channel ID": 208, "Name": "Disney Junior (RO)"},
    {"Channel ID": 209, "Name": "СуперГерои HD"},
    {"Channel ID": 210, "Name": "JimJam (RO)"},
    {"Channel ID": 211, "Name": "English Club TV HD"},
    {"Channel ID": 212, "Name": "Da Vinci HD"},
    {"Channel ID": 213, "Name": "Cartoon Network (RO) HD"},
    {"Channel ID": 214, "Name": "Cartoon Network (RU)"},
    {"Channel ID": 215, "Name": "Nick Jr (RO/RU)"},
    {"Channel ID": 216, "Name": "Nicktoons (RO)"},
    {"Channel ID": 217, "Name": "TeenNick (RO)"},
    {"Channel ID": 218, "Name": "TraLaLa HD"},
    {"Channel ID": 301, "Name": "National Geographic HD"},
    {"Channel ID": 302, "Name": "Nat Geo Wild HD"},
    {"Channel ID": 303, "Name": "Discovery Channel HD"},
    {"Channel ID": 304, "Name": "Investigation Discovery HD"},
    {"Channel ID": 305, "Name": "History HD"},
    {"Channel ID": 306, "Name": "viju History HD"},
    {"Channel ID": 307, "Name": "viju Explore HD"},
    {"Channel ID": 308, "Name": "viju+ Planet HD"},
    {"Channel ID": 309, "Name": "viju Nature HD"},
    {"Channel ID": 310, "Name": "Viasat Nature (RO) HD"},
    {"Channel ID": 311, "Name": "Viasat Explore (RO) HD"},
    {"Channel ID": 312, "Name": "Viasat History (RO) HD"},
    {"Channel ID": 313, "Name": "Animal Planet HD"},
    {"Channel ID": 314, "Name": "Love Nature HD"},
    {"Channel ID": 315, "Name": "Живая Планета"},
    {"Channel ID": 316, "Name": "Планета HD"},
    {"Channel ID": 317, "Name": "Galaxy HD"},
    {"Channel ID": 318, "Name": "Наука HD"},
    {"Channel ID": 401, "Name": "Eurosport 1 HD"},
    {"Channel ID": 402, "Name": "Eurosport 2 HD"},
    {"Channel ID": 403, "Name": "Setanta Sports 1 HD"},
    {"Channel ID": 404, "Name": "Setanta Sports 2 HD"},
    {"Channel ID": 405, "Name": "Setanta Sports HD"},
    {"Channel ID": 406, "Name": "WE SPORT TV HD"},
    {"Channel ID": 407, "Name": "viju+ Sport HD"},
    {"Channel ID": 408, "Name": "Q Sport HD"},
    {"Channel ID": 409, "Name": "KHL Prime HD"},
    {"Channel ID": 410, "Name": "MMA-TV HD"},
    {"Channel ID": 411, "Name": "Realitatea Sportiva HD"},
    {"Channel ID": 501, "Name": "Euronews Romania HD"},
    {"Channel ID": 502, "Name": "Euronews (RU)"},
    {"Channel ID": 503, "Name": "Euronews (EN) HD"},
    {"Channel ID": 504, "Name": "National 24 Plus"},
    {"Channel ID": 505, "Name": "Info TV Romania HD"},
    {"Channel ID": 506, "Name": "1+1 МАРАФОН"},
    {"Channel ID": 507, "Name": "Realitatea Plus HD"},
    {"Channel ID": 508, "Name": "Digi 24 HD"},
    {"Channel ID": 509, "Name": "France 24 English HD"},
    {"Channel ID": 510, "Name": "France 24 Français HD"},
    {"Channel ID": 511, "Name": "Настоящее Время HD"},
    {"Channel ID": 512, "Name": "Deutsche Welle (EN) HD"},
    {"Channel ID": 513, "Name": "CNN International HD"},
    {"Channel ID": 514, "Name": "BBC News HD"},
    {"Channel ID": 601, "Name": "Agro TV Moldova HD"},
    {"Channel ID": 602, "Name": "TLC HD"},
    {"Channel ID": 603, "Name": "Travel Mix HD"},
    {"Channel ID": 604, "Name": "Exploris"},
    {"Channel ID": 605, "Name": "Travel+Adventure HD"},
    {"Channel ID": 606, "Name": "RTG Int."},
    {"Channel ID": 607, "Name": "Охота и Рыбалка HD"},
    {"Channel ID": 608, "Name": "Здоровое ТВ"},
    {"Channel ID": 609, "Name": "TV Paprika"},
    {"Channel ID": 610, "Name": "Кухня ТВ HD"},
    {"Channel ID": 611, "Name": "Food Network HD"},
    {"Channel ID": 612, "Name": "HGTV HD"},
    {"Channel ID": 613, "Name": "Сарафан"},
    {"Channel ID": 614, "Name": "Kvartal TV HD"},
    {"Channel ID": 615, "Name": "Драйв"},
    {"Channel ID": 616, "Name": "Автоплюс HD"},
    {"Channel ID": 617, "Name": "Trinitas TV HD"},
    {"Channel ID": 618, "Name": "GNC"},
    {"Channel ID": 619, "Name": "Realitatea Star HD"},
    {"Channel ID": 620, "Name": "Fashion TV HD"},
    {"Channel ID": 701, "Name": "Noroc TV HD"},
    {"Channel ID": 702, "Name": "Tezaur TV HD"},
    {"Channel ID": 703, "Name": "Busuioc TV"},
    {"Channel ID": 704, "Name": "Zona M"},
    {"Channel ID": 705, "Name": "Favorit TV"},
    {"Channel ID": 706, "Name": "Mooz RO"},
    {"Channel ID": 707, "Name": "Mooz Hits"},
    {"Channel ID": 708, "Name": "Mooz Dance HD"},
    {"Channel ID": 709, "Name": "Europa Plus TV HD"},
    {"Channel ID": 710, "Name": "THT Music"},
    {"Channel ID": 711, "Name": "Музыка Первого"},
    {"Channel ID": 712, "Name": "Atomic TV HD"},
    {"Channel ID": 713, "Name": "Atomic Academy HD"},
    {"Channel ID": 714, "Name": "MTV Live HD"},
    {"Channel ID": 715, "Name": "MTV European"},
    {"Channel ID": 716, "Name": "MTV 00s"}
]

export default function TvModal({ open, handleClose, onSubmit }) {
  const [selectedChannels, setSelectedChannels] = React.useState([]);

  const handleCheckboxChange = (channelId) => {
    setSelectedChannels((prev) =>
      prev.includes(channelId)
        ? prev.filter((id) => id !== channelId)
        : [...prev, channelId]
    );
  };

  const handleSubmit = () => {
    const formattedChannels = selectedChannels.length
      ? selectedChannels.join(', ')
      : ''; // Only append the message in the parent component
    const result = formattedChannels ? `${formattedChannels} - TV channels unavailable` : '';
    onSubmit(result);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          Select Channels
        </Typography>
        <Grid container spacing={1}>
          {channels.map((channel) => (
            <Grid item xs={12} sm={6} md={2} key={channel['Channel ID']}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedChannels.includes(channel.Name)}
                    onChange={() => handleCheckboxChange(channel.Name)}
                  />
                }
                label={`${channel.Name} (${channel['Channel ID']})`}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'right' }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>

      
    </Modal>
  );
}
