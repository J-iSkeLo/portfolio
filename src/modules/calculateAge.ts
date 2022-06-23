const calculateAge = (): string => {
    const today = new Date()
    const birthDate = new Date('06/25/1991')
    const m = today.getMonth() - birthDate.getMonth()
    let age = today.getFullYear() - birthDate.getFullYear()

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    return age.toString()
}

export default calculateAge