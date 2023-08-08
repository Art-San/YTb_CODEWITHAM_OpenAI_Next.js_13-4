import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
})

const openai = new OpenAIApi(config)

export async function POST(req) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json(
        { message: 'Сообщения обязательны' },
        { status: 400 }
      )
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: message
        }
      ]
    })

    const reply = response.data.choices[0].message.content

    return NextResponse.json(
      { message: message, reply: reply },
      { status: 200 }
    )
  } catch (error) {
    console.log('error.message', error.message)
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
