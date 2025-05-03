import { ipcMain } from 'electron'

ipcMain.on('fetch-documents', () => {
  console.log('new-document')
})

