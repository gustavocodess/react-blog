import Butter from 'buttercms'

const butterCMSToken = process.env.MY_BUTTER_CMS_KEY

export const butter = Butter(butterCMSToken)

// once you created your ButterCMS account, you can
// find your API KEY simply going at https://buttercms.com/home/

export default butter