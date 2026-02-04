// Vercel Serverless Function
export default async function handler(req, res) {
  // CORS 설정
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { date } = req.query;
    const API_KEY = process.env.NASA_API_KEY;
    
    if (!API_KEY) {
      return res.status(500).json({ error: 'API 키가 설정되지 않았습니다.' });
    }

    let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    
    if (date) {
      url += `&date=${date}`;
    }

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('NASA API 요청 실패');
    }

    const data = await response.json();
    res.status(200).json(data);
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
}
