const calculateAge = (): string => {
    var today = new Date()
    var birthDate = new Date('1991-06-25 00:00:00')
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    return age.toString()
}

export default calculateAge