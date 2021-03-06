import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm({values, setValues}) {


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Dirección de entrega
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required = {true}
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => setValues({ ...values, firstName: e.target.value })}
          />
          {values.firstName.length === 0 && <small>Este campo es obligatorio</small>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellido"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          />
          {values.lastName.length === 0 && <small>Este campo es obligatorio</small>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Dirección 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => setValues({ ...values, address: e.target.value })}            
          />
          {values.address.length === 0 && <small>Este campo es obligatorio</small>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Dirección 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e) => setValues({ ...values, city: e.target.value })}
          />
          {values.city.length === 0 && <small>Este campo es obligatorio</small>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Localidad"
            fullWidth
            variant="standard"
            onChange={(e) => setValues({ ...values, state: e.target.value })}
          />
          {values.state.length === 0 && <small>Este campo es obligatorio</small>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Código postal"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e) => setValues({ ...values, zip: e.target.value })}
          />
          {values.zip.length === 0 && <small>Este campo es obligatorio</small>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="País"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(e) => setValues({ ...values, country: e.target.value })}
          />
          {values.country.length === 0 && <small>Este campo es obligatorio</small>}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Usar esta información para los detalles del pago"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
