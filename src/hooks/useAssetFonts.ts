import { useFonts } from 'expo-font';

const useAssetFonts = () => {
  const [fonts, fontError] = useFonts({
    "MajorMonoDisplay": require('../../assets/fonts/MajorMonoDisplay-Regular.ttf'),
    "Roboto-Regular": require('../../assets/fonts/Roboto-Regular.ttf'),
    "Roboto-Medium": require('../../assets/fonts/Roboto-Medium.ttf'),
    "Roboto-Black": require('../../assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold": require('../../assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Thin": require('../../assets/fonts/Roboto-Thin.ttf'),
  })
  return fonts
}

export default useAssetFonts
