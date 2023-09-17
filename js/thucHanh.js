var showBodyContent = callElement("#tblBody")
var valueInputName = callElement("#input_name")
var valueInputPower = callElement("#input_power")
var valueInputImg = callElement("#input_img")
var valueInputSearch = callElement("#input_search")
var btnAddCharacter = callElement("#btn_add")
var btnDeleteCharacter = callElement("#btn_delete")
var btnRemoveCharacter = callElement("#btn_delete_all")
var btnStrongest = callElement("#btn_strongest")
var btnWeakest = callElement("#btn_weakest")
var btnAbove70 = callElement("#btn_above70")
var btnLow2High = callElement("#btn_low2high")
var btnHigh2Low = callElement("#btn_high2low")
console.log("find btnWeakest: ", btnStrongest)
//------ Array Character
var characterList = [
  {
    name: "Luffy",
    power: 83,
    img: "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-anh-avatar-luffy.jpg"
  },
  {
    name: "Naruto",
    power: 90,
    img: "https://i.pinimg.com/736x/c8/db/2d/c8db2d795bb25604b3086e0a253f0708.jpg"
  },
  {
    name: "Kaneki",
    power: 57,
    img: "https://i1.sndcdn.com/avatars-000327615149-61ud82-t500x500.jpg"
  },
  {
    name: "Rikuo",
    power: 62,
    img: "https://i1.sndcdn.com/artworks-000146343230-cusfe4-t500x500.jpg"
  },
  {
    name: "Kira",
    power: 77,
    img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/302113354_380014140991083_2103822406654513459_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=8l5ouMqsb2EAX8OlzqI&_nc_oc=AQmc8oVCT3O3RkeoyvDYUwFFn5Q4WWIQoIV0XrjoChJP70rkJcl6M60ZewjXavHjpCA&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBR2DuXeyn-iYvapRCTQNifefqw6SQjvou5OLcUkjytgw&oe=650A55B7"
  },
  {
    name: "Denji",
    power: 49,
    img: "https://avatarfiles.alphacoders.com/340/340317.jpg"
  }
]

function callElement(id) {
  return document.querySelector(id)
}

function showCharacter() {
  var str = ""
  characterList.map((item, index) => {
    var charName = item.name
    charName = charName.charAt(0).toUpperCase() + charName.slice(1).toLowerCase();
    var charPower = item.power
    var charImg = item.img
    str += `
    <tr>
    <td>
      <span class="custom-checkbox">
        <input type="checkbox" id="checkbox1" name="options[]" value="1" />
        <label for="checkbox1"></label>
      </span>
    </td>
    <td><img src="${charImg}" alt="" style="width: 50px; height: 50px; border-radius: 50%" /></td>
    <td>${charName}</td>
    <td class="td-scores">${charPower}</td>
    <td>
      <i class="material-icons"
          data-toggle="tooltip" title="Edit" style="cursor:pointer; color: skyblue;">&#xE254;</i>
      <i class="material-icons"
          data-toggle="tooltip" title="Delete" style="cursor:pointer; color: red;" id="btn_delete" onclick="deleteChar('${charName}')">&#xE872;</i>
    </td>
  </tr>
`
  })
  showBodyContent.innerHTML = str;
}
showCharacter()
//-------------------------------------------------------------
function addCharacter() {
  var addCharacterName = valueInputName.value
  var addCharacterPower = valueInputPower.value
  var addCharacterImg = valueInputImg.value

  if (addCharacterName && addCharacterPower && addCharacterImg) {
    var checkMember = false
    characterList.map((item, index) => {
      if (addCharacterName === item.name) {
        checkMember = true
      }
    })
    if (checkMember) {
      alert("Nhân vật này đã tồn tại")
    } else {
      var newCharacter = {
        name: addCharacterName,
        power: addCharacterPower,
        img: addCharacterImg
      }
      characterList.push(newCharacter)
      showCharacter()
    }

  } else {
    alert("Vui lòng điền đầy đủ thông tin")
  }
}
btnAddCharacter.addEventListener("click", addCharacter)
//-------------------------------------------------------------
function deleteChar(Character) {
  var needDelete = characterList.findIndex((item) => {
    return item.name === Character
  })

  if (needDelete !== -1) {
    characterList.splice(needDelete, 1)
  }
  showCharacter()
}
//-------------------------------------------------------------
function removeCharacterList() {
  characterList = []
  showCharacter()
}
btnRemoveCharacter.addEventListener("click", removeCharacterList)
//-------------------------------------------------------------
function handleSearch() {
  var userInputSearch = valueInputSearch.value
  userInputSearch = userInputSearch.replace(/\s/g, '').toLowerCase();

  var viTri = characterList.findIndex((item, index) => {
    var characterSearch = item.name.replace(/\s/g, '').toLowerCase();
    var find = characterSearch === userInputSearch
    return find
  })

  if (viTri !== -1) {
    characterList = [characterList[viTri]]
    showCharacter()
  } else {
    characterList = [
      {
        name: "Luffy",
        power: 83,
        img: "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-anh-avatar-luffy.jpg"
      },
      {
        name: "Naruto",
        power: 90,
        img: "https://i.pinimg.com/736x/c8/db/2d/c8db2d795bb25604b3086e0a253f0708.jpg"
      },
      {
        name: "Kaneki",
        power: 57,
        img: "https://i1.sndcdn.com/avatars-000327615149-61ud82-t500x500.jpg"
      },
      {
        name: "Rikuo",
        power: 62,
        img: "https://i1.sndcdn.com/artworks-000146343230-cusfe4-t500x500.jpg"
      },
      {
        name: "Kira",
        power: 77,
        img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/302113354_380014140991083_2103822406654513459_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=8l5ouMqsb2EAX8OlzqI&_nc_oc=AQmc8oVCT3O3RkeoyvDYUwFFn5Q4WWIQoIV0XrjoChJP70rkJcl6M60ZewjXavHjpCA&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBR2DuXeyn-iYvapRCTQNifefqw6SQjvou5OLcUkjytgw&oe=650A55B7"
      },
      {
        name: "Denji",
        power: 49,
        img: "https://avatarfiles.alphacoders.com/340/340317.jpg"
      }
    ]
    showCharacter()
  }
}
valueInputSearch.addEventListener("keyup", handleSearch)
//-------------------------------------------------------------
function findStrongest() {
  if (characterList.length === 1) {
    characterList = [
      {
        name: "Luffy",
        power: 83,
        img: "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-anh-avatar-luffy.jpg"
      },
      {
        name: "Naruto",
        power: 90,
        img: "https://i.pinimg.com/736x/c8/db/2d/c8db2d795bb25604b3086e0a253f0708.jpg"
      },
      {
        name: "Kaneki",
        power: 57,
        img: "https://i1.sndcdn.com/avatars-000327615149-61ud82-t500x500.jpg"
      },
      {
        name: "Rikuo",
        power: 62,
        img: "https://i1.sndcdn.com/artworks-000146343230-cusfe4-t500x500.jpg"
      },
      {
        name: "Kira",
        power: 77,
        img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/302113354_380014140991083_2103822406654513459_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=8l5ouMqsb2EAX8OlzqI&_nc_oc=AQmc8oVCT3O3RkeoyvDYUwFFn5Q4WWIQoIV0XrjoChJP70rkJcl6M60ZewjXavHjpCA&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBR2DuXeyn-iYvapRCTQNifefqw6SQjvou5OLcUkjytgw&oe=650A55B7"
      },
      {
        name: "Denji",
        power: 49,
        img: "https://avatarfiles.alphacoders.com/340/340317.jpg"
      }
    ]
    showCharacter()
  } else {
    var strongest = characterList[0]
    characterList.map(item => {
      if (strongest.power < item.power) {
        strongest = item
      }
    })
    characterList = [strongest]
    showCharacter()
  }
}
btnStrongest.addEventListener("click", findStrongest)
//-------------------------------------------------------------
function findWeakest() {
  if (characterList.length === 1) {
    characterList = [
      {
        name: "Luffy",
        power: 83,
        img: "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-anh-avatar-luffy.jpg"
      },
      {
        name: "Naruto",
        power: 90,
        img: "https://i.pinimg.com/736x/c8/db/2d/c8db2d795bb25604b3086e0a253f0708.jpg"
      },
      {
        name: "Kaneki",
        power: 57,
        img: "https://i1.sndcdn.com/avatars-000327615149-61ud82-t500x500.jpg"
      },
      {
        name: "Rikuo",
        power: 62,
        img: "https://i1.sndcdn.com/artworks-000146343230-cusfe4-t500x500.jpg"
      },
      {
        name: "Kira",
        power: 77,
        img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/302113354_380014140991083_2103822406654513459_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=8l5ouMqsb2EAX8OlzqI&_nc_oc=AQmc8oVCT3O3RkeoyvDYUwFFn5Q4WWIQoIV0XrjoChJP70rkJcl6M60ZewjXavHjpCA&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBR2DuXeyn-iYvapRCTQNifefqw6SQjvou5OLcUkjytgw&oe=650A55B7"
      },
      {
        name: "Denji",
        power: 49,
        img: "https://avatarfiles.alphacoders.com/340/340317.jpg"
      }
    ]
    showCharacter()
  } else {
    var weakest = characterList[0]
    characterList.map(item => {
      if (weakest.power > item.power) {
        weakest = item
      }
    })
    characterList = [weakest]
    showCharacter()
  }
}
btnWeakest.addEventListener("click", findWeakest)
//-------------------------------------------------------------
function above70() {
  var characterAbove70 = []
  characterList.map(item => {
    if (item.power > 70) {
      characterAbove70.push(item)
    }
  })
  characterList = characterAbove70
  showCharacter()
}
btnAbove70.addEventListener("click", above70)
//-------------------------------------------------------------
function sortLow2High() {
  characterList = characterList.sort((a, b) => {
    return a.power - b.power
  })
  showCharacter()
}
btnLow2High.addEventListener("click", sortLow2High)
//-------------------------------------------------------------
function sortHigh2Low() {
  characterList = characterList.sort((a, b) => {
    return b.power - a.power
  })
  showCharacter()
}
btnHigh2Low.addEventListener("click", sortHigh2Low)

