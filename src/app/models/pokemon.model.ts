export interface Pokemon {
  name : string
  weight : number
  height : number
  sprites : Sprites
}

export interface Sprites {
  front_default : string
  back_default : string
  other : Other
}

export interface Other {
  'official-artwork' : Artwork
}

export interface Artwork {
  front_default : string
  front_shiny : string
}
