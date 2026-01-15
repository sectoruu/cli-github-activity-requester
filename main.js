#!/usr/bin/env node

import path from 'node:path'
import { fetchReq } from './utils/fetchReq.js'
import { formatEvent } from './utils/formatEvent.js'

const args = process.argv.slice(2)
const url = `https://api.github.com/users/${args[0]}/events`

try {
    const data = await fetchReq(url)
    data.forEach(event => console.log(formatEvent(event)))
} catch (err) {
  if (err instanceof TypeError) {
    console.error("Network error or CORS issue");
  } else if (err.message.startsWith("HTTP")) {
    console.error("API error:", err.message);
  } else {
    console.error("Unknown error:", err);
  }
}