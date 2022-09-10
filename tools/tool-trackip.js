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
import { isIP } from 'is-ip';
import getSymbolFromCurrency from 'currency-symbol-map';

const PLUGIN_VERSION="1.0.4"

let handler = async (m, {text, conn, args, usedPrefix, command }) => {

    function message(text) {
        conn.sendMessage(m.chat, { text: `${text}` }, {quoted: m})
    }
    
        try {
            if (! text) {
                message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Hey! Esta no es la manera correcta de usar *${usedPrefix}trackip*. La manera correcta de usarla es *${usedPrefix}trackip + <(IPv4/IPv6) publica del archivo>*! Ejemplo: *${usedPrefix}trackip 179.24.239.201*.\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
            } else {
                if (isIP(args[0])) {
                    const public_ip = await getCustomIpDetails(args[0])
                        message(`╭══════⊂(^(工)^)⊃══════╮\n\n[✅] Se ha encontrado informacion acerca de: ' *${args[0]}* '!\n\n➤ _(IPv4/IPv6): *${public_ip.query}*_\n➤ _Red Movil: *${public_ip.mobile ? '✅':'❌'}*_\n➤ _Proxy/VPN: *${public_ip.proxy ? '✅':'❌'}*_\n➤ _Pais: *${public_ip.country}*_\n➤ _Codigo de Pais: *${public_ip.countryCode}*_\n➤ _Continente: *${public_ip.continent}*_\n➤ _Codigo de Continente: *${public_ip.continent}*_\n➤ _Region: *${public_ip.region}*_\n➤ _Codigo de Region: *${public_ip.regionName}*_\n➤ _Ciudad: *${public_ip.city}*_\n➤ _Codigo Postal: *${public_ip.zip}*_\n➤ _Latitud: *${public_ip.lat}*_\n➤ _Longitud: *${public_ip.lon}*_\n➤ _Zona Horaria: *${public_ip.timezone}*_\n➤ _Moneda Local: *${public_ip.currency}*_\n➤ _Simbolo de Moneda Local: *${getSymbolFromCurrency(public_ip.currency)}*_\n➤ _ISP: *${public_ip.isp}*_\n➤ _Organizacion: *${public_ip.org}*_\n➤ _ASN: *${public_ip.as}*_\n➤ _Nombre de ASN: *${public_ip.asname}*_\n➤ _Reverse Proxy: *${public_ip.reverse}*_\n➤ _Hosting (VPS/VDS/DEDI): *${public_ip.hosting ? '✅':'❌'}*_\n\n_Esta informacion sobre la direccion (IPv4/IPv6) ' *${public_ip.query}* ' no es 100% exacta, favor de abstenerse a afirmar lo contrario._\n\nAlgun error? Reportalo abriendo una issue en GitHub!\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
                } else {
                    message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Esta direccion (IPv4/IPv6) no es valida. Por favor, abra una issue en GitHub para reportar el error.\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
                }
            }
        } catch(error) {
            message(`╭══════⊂(^(工)^)⊃══════╮\n\n[❌] Ha ocurrido un error "${error}". Por favor, abra una issue en GitHub para reportar el error.\n\n----| *v${PLUGIN_VERSION}* - *TheH2SO4/Mystic-Plugins* |---\n\n╰══════⊂(^(工)^)⊃══════╯`)
        }
}

handler.help = ['trackip + <(IPv4/IPv6) publica>']
handler.tags = ['tools']
handler.command = ['trackip']
export default handler