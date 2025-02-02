declare module "react-simple-typewriter" {
    export interface TypewriterProps {
      words: string[]
      loop?: boolean | number
      typeSpeed?: number
      deleteSpeed?: number
      delaySpeed?: number
      cursor?: boolean
      cursorStyle?: string
      onLoopDone?: () => void
      onType?: () => void
    }
  
    export function useTypewriter(props: TypewriterProps): [
      string,
      {
        isType: boolean
        isDelete: boolean
        isDelay: boolean
        isDone: boolean
      },
    ]
  
    export function Cursor(): JSX.Element
  }
  
  