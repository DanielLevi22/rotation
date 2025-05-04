import { BrowserWindow, Menu, nativeImage, Tray } from 'electron'
import trayIcon from '../../resources/rotionTemplate.png?asset'

export function createTray(window: BrowserWindow) {
  const tray = new Tray(nativeImage.createFromPath(trayIcon))

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Rotion', enabled: false },
    { type: 'separator' },
    {
      label: 'Criar novo documento',
      click: () => {
        window.webContents.send('new-document')
      },
    },
    { type: 'separator' },
    { label: 'Documentos recentes', enabled: false },
    { type: 'separator' },
    {
      label: 'Sair do Rotion',
      role: 'quit',
    },
  ])

  tray.setContextMenu(contextMenu)
}