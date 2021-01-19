import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { MyTheme } from '../src/styles/myTheme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(story => <ThemeProvider theme={MyTheme}>{story()}</ThemeProvider>)