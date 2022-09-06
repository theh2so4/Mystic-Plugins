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

import { getCustomIpDetails } from '@sarequl/client-ip-details';

const PLUGIN_VERSION="1.0.0"

let handler = async (m, {text, conn, args, usedPrefix, command }) => {

    function message(text) {
        conn.sendMessage(m.chat, { text: `${text}` }, {quoted: m})
    }
    
        try {
            if (! text) {
                message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Hey! Esta no es la manera correcta de usar *${usedPrefix}geoip*. La manera correcta de usarla es *${usedPrefix}geoip + <IPv4 publica del archivo>*! Ejemplo: *${usedPrefix}geoip 179.24.239.201*.\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
            } else {
                try {
                    const ipv4 = await getCustomIpDetails(args[0])
                        message(`╭══════⊂(^(工)^)⊃══════╮\n\n[✅] Se ha encontrado informacion acerca de: ' *${args[0]}* '!\n\n➤ _IPv4: *${ipv4.query}*_\n➤ _Red Movil: *${ipv4.mobile ? '✅':'❌'}*_\n➤ _Proxy/VPN: *${ipv4.proxy ? '✅':'❌'}*_\n➤ _Pais: *${ipv4.country}*_\n➤ _Codigo de Pais: *${ipv4.countryCode}*_\n➤ _Continente: *${ipv4.continent}*_\n➤ _Codigo de Continente: *${ipv4.continent}*_\n➤ _Region: *${ipv4.region}*_\n➤ _Codigo de Region: *${ipv4.regionName}*_\n➤ _Ciudad: *${ipv4.city}*_\n➤ _Codigo Postal: *${ipv4.zip}*_\n➤ _Latitud: *${ipv4.lat}*_\n➤ _Longitud: *${ipv4.lon}*_\n➤ _Zona Horaria: *${ipv4.timezone}*_\n➤ _Moneda Local: *${ipv4.currency}*_\n➤ _ISP: *${ipv4.isp}*_\n➤ _Organizacion: *${ipv4.org}*_\n➤ _ASN: *${ipv4.as}*_\n➤ _Nombre de ASN: *${ipv4.asname}*_\n➤ _Reverse Proxy: *${ipv4.reverse}*_\n➤ _Hosting (VPS/VDS/DEDI): *${ipv4.hosting ? '✅':'❌'}*_\n\n_Esta informacion sobre la direccion IPv4 ' *${ipv4.query}* ' no es 100% exacta, favor de abstenerse a afirmar lo contrario._\n\nAlgun error? Reportalo abriendo una issue en GitHub!\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
                } catch(error) {
                    message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Esta direccion IPv4 no es valida.. Por favor, abra una issue en GitHub para reportar el error.\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
                }
            }
        } catch(error) {
            message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Ha ocurrido un error "${error}". Por favor, abra una issue en GitHub para reportar el error.\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
        }
}

handler.help = ['geoip + <IPv4 publica>']
handler.tags = ['tools']
handler.command = ['geoip']
export default handler