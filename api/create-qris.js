export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
    const { order_id, amount } = req.body;
    try {
        const response = await fetch('https://app.pakasir.com/api/transactioncreate/qris', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "project": "reyclouddev",
                "order_id": order_id,
                "amount": parseInt(amount),
                "api_key": "9AwCqt0h99ArK0Jy7R5PYpP1FmdQ0SWN"
            })
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (e) { res.status(500).json({ error: e.message }); }
}
