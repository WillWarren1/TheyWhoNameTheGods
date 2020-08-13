export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

export const setDomain = (object) => {}

export const godGenerator = () => {
  const namePrefix = [
    'Yun',
    'Dol',
    'Fir',
    'Tolthad',
    'Cruth`',
    'Gol',
    'Tin',
    'Ver ',
    'Mico',
    'Hal',
    'Doracs ',
    'Funf',
    'Dibwar',
    'Gël`',
    'Gürl',
    'Punparro',
  ]
  const nameMiddle = [
    'ul',
    '`yün`',
    'fel',
    'dog',
    'tral',
    'ver',
    'gil',
    'toro',
    'nom',
    'glomp',
    'qwerantes',
    'guillora',
    'tenzin',
    'yieros',
    'kilakila',
    'dun`',
    'icros',
  ]
  const nameSuffix = [
    'korrasamos',
    'zolthos',
    'thurnös',
    'kye',
    'feros',
    'tera',
    'fol',
    'sos',
    'ty',
    'alty',
    'nott',
    'regarz',
    'vindiblae',
    'aurochs',
    'ton',
    'phel',
    'amräel',
    'thar',
    'vrum',
  ]
  const hasMiddle = getRandomInt(2) === 0 ? true : false
  const newlyGeneratedGodName =
    namePrefix[getRandomInt(namePrefix.length)] +
    (hasMiddle
      ? nameMiddle[getRandomInt(nameMiddle.length)] +
        nameSuffix[getRandomInt(nameSuffix.length)]
      : nameSuffix[getRandomInt(nameSuffix.length)])
  return newlyGeneratedGodName
}

export const titleGenerator = () => {
  const subject = [
    'Friend',
    'Devourer',
    'Painter',
    'Hunter',
    'Bane',
    'Surgeon',
    'Guardian',
    'Angel',
    'Qing',
    'Failure',
    'Gardener',
    'Healer',
    'Destroyer',
    'Lover',
    'Specter',
    'Lord',
    'Beseecher',
    'Beggar',
    'Familiar',
    'Enactor',
    'Wearer',
    'Wrecker',
    'Hater',
    'Wanderer',
    'Cloud',
    'Maiden',
    'Performer',
    'Believer',
  ]
  const adjective = [
    'Ominous',
    'Fearsome',
    'Astounding',
    'Stellar',
    'Dusty',
    'Small',
    'Greater',
    'Lesser',
    'Beautiful',
    'Impending',
    'Successful',
    'Powerful',
    'Careful',
    'Lucky',
    'Spectacular',
    'Stunning',
    'Loathsome',
    'Inevitable',
    'Gallant',
    'Juicy',
    'Inconceivable',
    'Strange',
    'Unknown',
    'Unknowable',
    'Infallible',
    'Mighty',
    'Crystal',
    'Polygonal',
  ]
  const object = [
    'Friends',
    'Strangers',
    'Souls',
    'Light',
    'Shadows',
    'Void',
    'Truth',
    'Lies',
    'Life',
    'Fate',
    'Dust',
    'Sand',
    'Fire',
    'Angels',
    'Crows',
    'Tortoises',
    'Bears',
    'Wind',
    'Wings',
    'Secrets',
    'Things Beneath the Dirt',
    'Things Beneath the Waves',
    'Things Behind Closed Doors',
    'Bugs',
    'Sleep',
    'Dreams',
    'Towers',
    'Civilization',
    'Plague',
    'All Things Woven',
    'Hearths',
    'Homes',
    'Strength',
    'The Weak',
    'Failures',
  ]
  const typesOfTitles = [
    'the Adjective Object',
    'the Adjective Subject',
    'the Object of Object',
    'the Subject of Object',
    'the Subject',
    'the Object',
    'Adjective Subject',
    'Object of Object',
    'the Subject Subject',
    'Subject Subject',
    'the Adjective',
    'the Subject of Adjective Object',
    'the Adjective Subject of Object',
    'the Adjective Subject of the Adjective Subject',
  ]

  let selectedTitle = typesOfTitles[getRandomInt(typesOfTitles.length)]
  //do all replacements twice due to the nature of the typesOfTitles array
  selectedTitle = selectedTitle
    .replace(/Adjective/, `${adjective[getRandomInt(adjective.length)]}`)
    .replace(/Object/, `${object[getRandomInt(object.length)]}`)
    .replace(/Subject/, `${subject[getRandomInt(subject.length)]}`)
    .replace(/Adjective/, `${adjective[getRandomInt(adjective.length)]}`)
    .replace(/Object/, `${object[getRandomInt(object.length)]}`)
    .replace(/Subject/, `${subject[getRandomInt(subject.length)]}`)

  return selectedTitle
}

export const fetchGodData = async () => {
  const data = await fetch('http://localhost:5000/api/Gods', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((resp) => {
      return resp
    })

  return data
}

export const fetchCreationData = () => {
  const data = fetch('http://localhost:5000/api/Creations', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((resp) => {
      return resp
    })

  return data
}

export const forgeDivineCreation = (creator) => {
  const object = [
    'Friends',
    'Strangers',
    'Souls',
    'Light',
    'Shadows',
    'Void',
    'Truth',
    'Lies',
    'Life',
    'Fate',
    'Dust',
    'Sand',
    'Fire',
    'Angels',
    'Crows',
    'Tortoises',
    'Bears',
    'Wind',
    'Wings',
    'Secrets',
    'Things Beneath the Dirt',
    'Things Beneath the Waves',
    'Things Behind Closed Doors',
    'Bugs',
    'Sleep',
    'Dreams',
    'Towers',
    'Civilization',
    'Plague',
    'All Things Woven',
    'Hearths',
    'Homes',
    'Strength',
    'The Weak',
    'Failures',
  ]

  const name = object[getRandomInt(object.length)]
  if (creator && name) {
    const data = fetch('http://localhost:5000/api/Creations', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        belongsToGod: creator,
        population: 100,
      }),
    })
      .then((response) => response.json())
      .then((resp) => {
        return resp
      })

    return data
  }
}

export const deleteCreation = (id) => {
  const data =
    id &&
    fetch(`http://localhost:5000/api/Creations?id=${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        return resp
      })

  return data
}

export const addOrSubtractDivineCreations = (id, addOrSubtract, quantity) => {
  if (id && quantity && addOrSubtract) {
    const data = fetch(
      `http://localhost:5000/api/Creations?id=${id}&addOrSubtact=${addOrSubtract}&quantity=${quantity}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((resp) => {
        return resp
      })
    if (data.population <= 0) {
      return deleteCreation(data.id)
    }
    return data
  }
}

export const changeDivineFavor = (id, addOrSubtract, quantity) => {
  if (id && quantity && addOrSubtract) {
    const data = fetch(
      `http://localhost:5000/api/Gods?id=${id}&addOrSubtact=${addOrSubtract}&quantity=${quantity}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((resp) => {
        return resp
      })

    return data
  }
}

export const deleteGod = (id) => {
  const data =
    id &&
    fetch(`http://localhost:5000/api/Gods?id=${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((resp) => {
        return resp
      })

  return data
}

export const attackOtherGod = async (attacker, defender) => {
  const differenceBetween = attacker?.favor - defender?.favor
  let message
  if (differenceBetween > 3) {
    await deleteGod(defender.id)
    message = `${attacker.name} ${attacker.title}  destroyed ${defender.name}, ${defender.title}! Without their influence, their creations cannot last.`
    return { message }
  } else if (differenceBetween < 3 && differenceBetween > 0) {
    await changeDivineFavor(attacker.id, 'add', 2)
    await changeDivineFavor(defender.id, 'subtract', 2)
    message = `${attacker?.name} ${attacker.title}  attacked ${defender.name}, ${defender.title}! ${defender.name} has been wounded.`
    return { message }
  } else if (differenceBetween > -3 && differenceBetween < 0) {
    await changeDivineFavor(attacker.id, 'subtract', 2)
    await changeDivineFavor(defender.id, 'add', 2)
    message = `${attacker?.name} ${attacker.title}  attacked ${defender.name}, ${defender.title}! ${attacker.name} has been wounded.`
    return { message }
  } else if (differenceBetween < -3) {
    await deleteGod(attacker.id)
    message = `${attacker.name}, ${attacker.title}, attacked ${defender.name}, ${defender.title}, and was destroyed! Without their influence, their creations cannot last.`
    return { message }
  } else if (differenceBetween === 0) {
    message = `${attacker.name}, ${attacker.title}, attacked ${defender.name}, ${defender.title}, but their power is equal! Neither shall claim victory`
    return { message }
  }
}

export const decideAction = async (godData, creationData) => {
  const decisionNumber = getRandomInt(21)
  if (decisionNumber < 5) {
    const message = 'A new Deity is born!'
    const godName = await godGenerator()
    const godTitle = await titleGenerator()
    return { message, godName, godTitle }
  } else if (decisionNumber < 15) {
    const quantity = getRandomInt(201)
    const godThatWillCreate = godData[getRandomInt(godData.length)]
    const selectedCreation =
      godThatWillCreate?.divineCreations &&
      godThatWillCreate.divineCreations[
        getRandomInt(godThatWillCreate.divineCreations?.length)
      ]
    await addOrSubtractDivineCreations(selectedCreation?.id, 'add', quantity)
    const message = `${godThatWillCreate.name} ${godThatWillCreate.title} has created ${quantity} more ${selectedCreation?.name}`
    return { message }
  } else if (decisionNumber !== 20) {
    const quantity = getRandomInt(201)
    const godThatWillDestroy = godData[getRandomInt(godData.length)]
    let godThatWillBeTarget = godData[getRandomInt(godData.length)]
    if (godThatWillBeTarget.id == godThatWillDestroy.id) {
      godThatWillBeTarget = godData[getRandomInt(godData.length)]
    }
    const divineCreations =
      godThatWillBeTarget && godThatWillBeTarget.divineCreations
    const selectedCreation =
      divineCreations && divineCreations[getRandomInt(divineCreations?.length)]
    await addOrSubtractDivineCreations(
      selectedCreation?.id,
      'subtract',
      quantity
    )
    const message = `${godThatWillDestroy.name} ${godThatWillBeTarget.title} has destroyed ${quantity} ${selectedCreation?.name}s`
    return { message }
  } else {
    const godThatWillAttack = godData[getRandomInt(godData.length)]
    let godThatWillDefend = godData[getRandomInt(godData.length)]
    if (godThatWillDefend.id == godThatWillAttack.id) {
      godThatWillDefend = godData[getRandomInt(godData.length)]
    }
    return attackOtherGod(godThatWillAttack, godThatWillDefend)
  }
}
