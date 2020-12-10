// 1. 联合类型 (Union Types)

function padLeft(value: string, padding: number | string) {
  if (typeof padding == 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding == 'string') {
    return padding + value
  }
}

// 这里的 number | string 叫联合类型


// 2. 可辨识联合(Discriminated Unions)

interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Trangle {
  kind: 'trangle',
  width: number;
  heigth: number;
  long: number;
}

type Shape = Square | Rectangle | Circle | Trangle;

// 使用类型中的kind，TS可以自动的辨识属于什么类型

// function area (s: Shape) {
//   switch (s.kind) {
//     case 'circle':
//       return Math.PI * s.radius * 2;
//     case 'rectangle':
//       return s.height * s.width;
//     case 'square': 
//       return s.size * s.size;
//   }
// }

// 3. 完整性检查(Union Exhaustiveness checking) 
// 这种完整性的检测一般要在tsconfig.json中配置：  "strictNullChecks": true, 默认情况下是不会启用这种检查


function assetNever(x: never) {
  throw new Error('Unexpected object: ' + x)
}

function area(s: Shape) {
  switch (s.kind) {
    case 'circle':
      return Math.PI * s.radius * 2;
    case 'rectangle':
      return s.height * s.width;
    case 'square':
      return s.size * s.size;
    // default: return assetNever(s)
  }
}

// 4. 交叉类型(Intersection Types)
// 语法为: 类型A & 类型B

interface ErrorHandling {
  success: boolean;
  error?: { message: string }
}

interface ArtworksData {
  artworks: {title: string}[];
}


interface ArtistsData {
  artists: {name: string}[];
}


type ArtworksResponse = ArtworksData & ErrorHandling;

type ArtistsResponse = ArtistsData & ErrorHandling;


const handleArtistsResponse = (response: ArtistsResponse) => {
  if(response.error) {
    console.log(response.error.message)
    return;
  }

  console.log(response.artists)
}





