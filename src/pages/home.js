import React, { useEffect, useState } from 'react'

//
import home from '../style/home'

const Home = () => {
  useEffect(() => {
    document.title = ' QRCURL - Generate New QR Code'
  })

  return (
    <home.Wrapper>
      <home.Title>Generate QR Code</home.Title>
      <home.Form>
        <home.Label htmlFor="url">
          Url <home.Warning>*</home.Warning>
        </home.Label>
        <home.Input
          id="url"
          name="url"
          placeholder="http://www.google.com"
          type="url"
        />
        <home.Label htmlFor="title">Title</home.Label>
        <home.Input
          id="title"
          name="title"
          maxlength="50"
          placeholder="Search the world's information"
          type="text"
        />
        <home.Label htmlFor="description">Description</home.Label>
        <home.Textarea
          id="description"
          name="description"
          maxlength="95"
          placeholder="Google has many special features to help you find exactly what you're looking for."
          type="text"
          wrap="soft"
        />
        <home.Button type="submit">Generate QRCurl</home.Button>
      </home.Form>
      <home.Info>
        All fileds marked with <home.Warning>*</home.Warning> are required!
      </home.Info>
    </home.Wrapper>
  )
}

export default Home
