// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "id": "1",
        "date": "PHASE",
        "title": "Concept",
        "text": "Lorem Ipsum available, but the majority have"
      },
      {
        "id": "2",
        "date": "Phase",
        "title": "Research",
        "text": "Lorem Ipsum available, but the majority have"
      },
      {
        "id": "3",
        "date": "Phase",
        "title": "Token Sale",
        "text": "Lorem Ipsum available, but the majority have"
      },
      {
        "id": "4",
        "date": "Phase",
        "title": "Pre-sale",
        "text": "Lorem Ipsum available, but the majority have"
      },
      {
        "id": "++",
        "date": "May 2021",
        "title": "IDO Launch",
        "text": "Lorem Ipsum available, but the majority have"
      }
    ],
  )
}
