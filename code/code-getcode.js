// # /////////////////////////////////////////////////////////////////////////// #
// #                                                                             #
// #                      Copyright 2022 TheH2SO4 (Hiro)                         #
// #                                                                             #
// #   Licensed under the Apache License, Version 2.0 (the "License");           #
// #   you may not use this file except in compliance with the License.          #
// #   You may obtain a copy of the License at                                   #
// #                                                                             #
// #       http://www.apache.org/licenses/LICENSE-2.0                            #
// #                                                                             #
// #   Unless required by applicable law or agreed to in writing, software       #
// #   distributed under the License is distributed on an "AS IS" BASIS,         #
// #   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  #
// #   See the License for the specific language governing permissions and       #
// #   limitations under the License.                                            #
// #                                                                             #
// # /////////////////////////////////////////////////////////////////////////// #

// # ////////////////| [🥽] | TheH2SO4 | [⚗️] |//////////////// #

// # || Start [📍] || #

import fs from 'fs';

const PLUGIN_VERSION="1.0.4"

let handler = async (m, {text, conn, args, usedPrefix, command }) => {

    ///////////////| [❗] Configuracion del Plugin |///////////////

    let permsOwner = false // | Te gustaria que solo owners puedan usar este comando? (true/false) (NO USAR)
    let permsAdmin = true // | Te gustaria que solo administradores puedan usar este comando? (true/false) (NO USAR)

    //////////////////////////////////////////////////////////

    function message(text) {
        conn.sendMessage(m.chat, { text: `${text}` }, {quoted: m})
    }

    function noOwner() {
        conn.sendMessage(m.chat, { text: `╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Hey! No tienes permiso de usar este comando, solo l@s Owners pueden!\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯` }, {quoted: m})
    }

    function noAdmin() {
        conn.sendMessage(m.chat, { text: `╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Hey! No tienes permiso de usar este comando, solo l@s Admins pueden!\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯` }, {quoted: m})
    }
    
        try {
            if (! text) {
                message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Hey! Esta no es la manera correcta de usar *${usedPrefix}getcode*. La manera correcta de usarla es *${usedPrefix}getcode + <ruta del archivo>*! Ejemplo: *${usedPrefix}getcode /plugins/code-getcode.js*.\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
            } else {
                /*if (permsOwner === "true") {
                    return noOwner()
                } else if (permsAdmin === "true") {
                    return noAdmin()
                }*/
                    if (fs.existsSync(`.${args[0]}`)) {
                        conn.sendFile(m.chat, `.${args[0]}`, null, { quoted: m })
                        message(`╭══════⊂(^(工)^)⊃══════╮\n\n[✅] Aqui esta el archivo en la ruta ' *${args[0]}* '!\n\nAlgun error? Reportalo abriendo una issue en GitHub!\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
                    } else {
                        message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] El archivo en la ruta ' *${args[0]}* ' no existe!\n\nAlgun error? Reportalo abriendo una issue en GitHub!\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
                    }
            }
        } catch(error) {
            message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Ha ocurrido un error "${error}". Por favor, abra una issue en GitHub para reportar el error.\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
        }
}

handler.help = ['getcode + <ruta>']
handler.tags = ['tools']
handler.command = ['getcode']
export default handler