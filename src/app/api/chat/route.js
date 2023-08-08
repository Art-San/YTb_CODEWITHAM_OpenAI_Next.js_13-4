import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'
// 27:59
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST(req) {
  try {
    const { message } = await req.json()

    if (!configuration.apiKey) {
      return NextResponse.json(
        { message: 'OpenAI API Key not configured' },
        { status: 500 }
      )
    }

    if (!messages) {
      return NextResponse.json(
        { message: 'Messages are required' },
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
    // return NextResponse.json(response.data.choices[0].message)
    return NextResponse.json(
      { message: message, reply: reply },
      { status: 200 }
    )
  } catch (error) {
    console.log('error.message', error.message)
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
