/*
by JDHelloWorld 20211031

10 0 * * * https://raw.githubusercontent.com/yyn618/QuantumultX-Script/master/Script/Files/JD/jd_cfd_shell.js, tag=京喜财富岛捡贝壳, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd.png, enabled=true
*/

import axios from 'axios'
import USER_AGENT, {requireConfig, wait, requestAlgo, h5st} from './TS_USER_AGENTS'

let cookie: string = '', res: any = ''
process.env.CFD_LOOP_DELAY ? console.log('设置延迟:', parseInt(process.env.CFD_LOOP_DELAY)) : console.log('设置延迟:10000~25000随机')

let UserName: string, index: number
!(async () => {
  await requestAlgo()
  let cookiesArr: any = await requireConfig()

  while (1) {
    if (new Date().getHours() === 0 && new Date().getMinutes() < 10)
      break
    for (let i = 0; i < cookiesArr.length; i++) {
      cookie = cookiesArr[i]
      UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)![1])
      index = i + 1
      console.log(`\n开始【京东账号${index}】${UserName}\n`)
      try {
        let shell: any = await speedUp('_cfd_t,bizCode,dwEnv,ptag,source,strZone')
        if (shell?.Data?.NormShell) {
          for (let s of shell.Data.NormShell) {
            for (let j = 0; j < s.dwNum; j++) {
              res = await speedUp('_cfd_t,bizCode,dwEnv,dwType,ptag,source,strZone', s.dwType)
              if (res.iRet !== 0) {
                console.log(res)
                break
              }
              console.log('捡贝壳:', res.Data.strFirstDesc)
              await wait(500)
            }
          }
        }
      } catch (e) {
        console.log(e)
      }
    }
    await wait(60 * 10 * 1000) // 10min
  }
})()

async function speedUp(stk: string, dwType?: number) {
  try {
    let url: string
    if (stk === '_cfd_t,bizCode,dwEnv,ptag,source,strZone')
      url = `https://m.jingxi.com/jxbfd/story/queryshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=${Date.now()}&ptag=&_stk=_cfd_t%2CbizCode%2CdwEnv%2Cptag%2Csource%2CstrZone&_ste=1&_=${Date.now()}&sceneval=2`
    else if (stk === '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strZone')
      url = `https://m.jingxi.com/jxbfd/story/pickshell?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=${Date.now()}&ptag=&dwType=${dwType}&_stk=_cfd_t%2CbizCode%2CdwEnv%2CdwType%2Cptag%2Csource%2CstrZone&_ste=1&_=${Date.now()}&sceneval=2`
    url = h5st(url, stk, {})
    let {data} = await axios.get(url, {
      headers: {
        'Host': 'm.jingxi.com',
        'Referer': 'https://st.jingxi.com/',
        'User-Agent': USER_AGENT,
        'Cookie': cookie
      }
    })
    return data
  } catch (e) {
    return ''
  }
}