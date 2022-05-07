import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImage from '../../assets/bug.png';
import ideaImage from '../../assets/idea.png';
import thoughtImage from '../../assets/thought.png';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeSteps";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
 BUG: {
  title: 'Problema',
  image: {
   source: bugImage,
   alt:'Imagem de um Inseto'

  },
 },

 IDEA: {
  title: 'Ideia',
  image: {
   source: ideaImage,
   alt:'Imagem de um lâmpada'

  },
 },

 OTHER: {
  title: 'Outros',
  image: {
   source: thoughtImage,
   alt:'Imagem de uma nuvem'

  },
 },
};
 
export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

const [feedbackType ,setfeedbackType] = useState<FeedbackType | null>(null)
 

 return(
  <>
  <div className= "bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
   <header>
    <span className="text-xl leading-6"> Deixe seu Comentário</span>
    
    <CloseButton/>
   </header>

   {!feedbackType ? (
    <FeedbackTypeStep onFeedbackTypeChanged= {setfeedbackType} />
   ) : ( 
    <FeedbackContentStep feedbackType={feedbackType}/>

   )}
    

   <footer className="text-xs text-neutral-400">
    feito por Luiz Felipe 

   </footer>
  </div>
  </>
 )

}