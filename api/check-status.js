export default async function handler(req, res) {
    const { order_id, amount } = req.query;
    const project = "reyclouddev";
    const apiKey = "9AwCqt0h99ArK0Jy7R5PYpP1FmdQ0SWN";
    try {
        const url = `https://app.pakasir.com/api/transactiondetail?project=${project}&amount=${amount}&order_id=${order_id}&api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        
        // Ambil status dari res.transaction.status sesuai dokumen E
        const statusTransaksi = data.transaction ? data.transaction.status : "pending";
        
        res.status(200).json({ status: statusTransaksi });
    } catch (e) { res.status(500).json({ error: e.message }); }
}
