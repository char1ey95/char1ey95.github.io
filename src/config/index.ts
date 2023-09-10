export const DATABASE_ID = process.env.NOTION_DATABASE_ID
export const TOKEN = process.env.NOTION_TOKEN
export const options = {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({
        page_size: 100, sorts: [
            {
                "property": "workPeriod",
                "direction": "descending"
            }
        ]
    })
};