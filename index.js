const express = require('express');
const app = express();
app.use(express.json());

let inventory = [{ id: "1", name: "Laptop", stock: 10 }];

app.get('/api/inventory', (req, res) => {
    res.status(200).json({ status: "OK", data: inventory, errors: null });
});

app.get('/api/inventory/:id', (req, res) => {
    const item = inventory.find(i => i.id === req.params.id);
    if (!item) return res.status(404).json({ status: "ERROR", data: null, errors: ["Item not found"] });
    
    res.status(200).json({ status: "OK", data: item, errors: null });
});

app.post('/api/inventory', (req, res) => {
    const newItem = { id: String(Date.now()), name: req.body.name, stock: req.body.stock };
    inventory.push(newItem);
    res.status(201).json({ status: "OK", data: newItem, errors: null });
});

app.put('/api/inventory/:id', (req, res) => {
    const item = inventory.find(i => i.id === req.params.id);
    if (!item) return res.status(404).json({ status: "ERROR", data: null, errors: ["Item not found"] });
    
    item.name = req.body.name || item.name;
    item.stock = req.body.stock || item.stock;
    res.status(200).json({ status: "OK", data: item, errors: null });
});

app.delete('/api/inventory/:id', (req, res) => {
    inventory = inventory.filter(i => i.id !== req.params.id);
    res.status(200).json({ status: "OK", data: null, errors: null });
});

// Ekspor app untuk testing, jalankan server hanya jika dijalankan langsung
if (require.main === module) {
    app.listen(3000, () => console.log('Server running on port 3000'));
}
module.exports = app;