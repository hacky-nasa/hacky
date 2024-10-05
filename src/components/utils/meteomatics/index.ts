export const fetchData = async (src: string) => {
  try {
    const response = await fetch(
      `https://api.meteomatics.com/yesterday-3MT00:00Z--todayT12:00Z:PT24H/soil_moisture_index_-5cm:idx,soil_moisture_index_-15cm:idx,soil_moisture_index_-50cm:idx,wind_speed_2m:ms,wind_speed_10m:ms,wind_dir_2m:d,wind_dir_10m:d,t_0m:C,t_2m:C,relative_humidity_2m:p/${src}/json?source=mix`,
      {
        headers: {
          Authorization: 'Basic ' + btoa('kamil_irfan:j5D0QykUs5'),
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }

    const result = await response.json()
    return result
  } catch (error: any) {
    throw error.message
  }
}
