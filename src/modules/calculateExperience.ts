type DateDiff = {
    years: number
    months: number
}

function getDateDiff(): DateDiff {
    const today = new Date()
    const careerStarted = new Date('2020-09-01')

    let months = (today.getFullYear() - careerStarted.getFullYear()) * 12
    months -= careerStarted.getMonth()
    months += today.getMonth()

    const years = Math.floor(months / 12)

    return {
        months: months - (years * 12),
        years,
    }
}

const calculateExperience = (): string => {
    let result = '-'
    let { years, months } = getDateDiff()

    if (months === 0 || months === 1) {
        return `${years}+`
    }

    if ([4, 5, 6, 7, 8].includes(months)) {
        return `${years} and a half`
    }

    if ([9, 10].includes(months)) {
        ++years
        return `almost ${years}`
    }

    if ([11, 12].includes(months)) {
        ++years
    }

    return result
}

export default calculateExperience