const API_KEY = 'e9a090ef362f655e0bfea82e861c08d1&hash=001db2784ce75cb81e9303b017ec2def';
const API_BASE = 'https://gateway.marvel.com:443/v1/public';

const basicFetch = async (endpoint:any) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'commics',
                title: 'Commics',
                items: await basicFetch(`/comics?ts=1&apikey=${API_KEY}`)
            },
        ]
    }
}