const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const supabaseUrl = 'https://bfgknekewqyotacfiuyz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmZ2tuZWtld3F5b3RhY2ZpdXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgxNzgzMDMsImV4cCI6MjAwMzc1NDMwM30.BWz4Fs-sdybLNsI76Gk8lhSyN4LoS4B7zv1cOhfbMqE';

supabaseClient = createClient(
    supabaseUrl,
    supabaseKey
);

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/live', (req, res) => {

    res.json({ message: "Hello React from backend" });

});

app.get('/select/resp', async (req, res) => {
  const { resp } = req.query; // Captura el parámetro de consulta
  const ascending = resp === 'true'; // Convertir a booleano

  if (resp !== 'true' && resp !== 'false') {
    return res.status(400).json({ error: 'El valor de "resp" debe ser "true" o "false".' });
  }

  const { data, error } = await supabaseClient
    .from('zapatillas')
    .select('id, nombre, precio, imagen, marca(id, nombre), sexo(id, nombre)')
    .order('precio', { ascending });

  if (error) {
    console.error('Error en la consulta:', error);
    return res.status(500).json({ error: 'Error al realizar la consulta.' });
  }

  res.json(data);
});

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${3000}`);
});