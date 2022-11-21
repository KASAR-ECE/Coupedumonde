import React from 'react'
import Image from "next/image"
import countryFlagEmoji from "country-flag-emoji";

const CountryFlag = ({ teamName }) => {
    const cdnUrl = "https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/";
    const suffix = ".svg"
    let countryName;
    let countryCode;
    if (teamName === "USA") {
        countryName = "United States"
        countryCode = countryFlagEmoji.list.filter(item => item.name === countryName)[0].code
    } else if (teamName === "Wales") {
        countryCode = "GB-WLS"
    } else if (teamName === "England") {
        countryCode = "GB"
    } else if (teamName === "Korea Republic") {
        countryCode = "KR"
    } else {
        countryCode = countryFlagEmoji.list.filter(item => item.name === teamName.toString())[0] ?
            countryFlagEmoji.list.filter(item => item.name === teamName.toString())[0].code : "FR"
    }

    return <Image src={cdnUrl + countryCode + suffix} alt={teamName} width={40} height={40} className="mx-2 w-14 h-14" />
}

export default CountryFlag