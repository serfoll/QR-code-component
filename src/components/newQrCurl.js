import React, { useState } from 'react'

import qrcurlForm from '../style/qrcurlForm'
import QrCodeColors from './QrCodeColors'

const NewQrCurl = () => {
  //default form state
  const [values, setValues] = useState()

  //update form on user input
  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  return (
    <qrcurlForm.Wrapper>
      <qrcurlForm.Title>Generate QR Code</qrcurlForm.Title>
      <qrcurlForm.Form
        onSubmit={event => {
          event.preventDefault()
          const randIndex = Math.floor(Math.random() * QrCodeColors.length)
          values.hexCode = QrCodeColors[randIndex]
          console.log(values)
        }}
      >
        <qrcurlForm.Label htmlFor="url">
          Url <qrcurlForm.Warning>*</qrcurlForm.Warning>
        </qrcurlForm.Label>
        <qrcurlForm.Input
          id="url"
          onChange={onChange}
          name="url"
          placeholder="http://www.google.com"
          type="url"
        />
        <qrcurlForm.Label htmlFor="title">Title</qrcurlForm.Label>
        <qrcurlForm.Input
          id="title"
          onChange={onChange}
          name="title"
          maxlength="50"
          placeholder="Search the world's information"
          type="text"
        />
        <qrcurlForm.Label htmlFor="description">Description</qrcurlForm.Label>
        <qrcurlForm.Textarea
          id="description"
          onChange={onChange}
          name="description"
          maxlength="95"
          placeholder="Google has many special features to help you find exactly what you're looking for."
          type="text"
          wrap="soft"
        />
        <qrcurlForm.Button type="submit">Generate QRCurl</qrcurlForm.Button>
      </qrcurlForm.Form>
      <qrcurlForm.Info>
        All fileds marked with <qrcurlForm.Warning>*</qrcurlForm.Warning> are
        required!
      </qrcurlForm.Info>
    </qrcurlForm.Wrapper>
  )
}

export default NewQrCurl
