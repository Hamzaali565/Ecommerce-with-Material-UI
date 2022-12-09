import { keyframes } from "@emotion/react";

const flipHorizontalBottom = keyframes`
0% {
    -webkit-transform: rotateX(0);
           -transform: rotateX(0);
        }
100% {
    -webkit-transform: rotateX(-180deg);
           -transform: rotateX(-180deg);

}
`;
export const textPopUpTop = keyframes`
0% {
    -webkit-transform: translateY(0);
           -transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
           -transform-origin: 50% 50%;
    text-shadow: none;
}

100% {
    -webkit-transform: translateY(-10px);
           -transform: translateY(-10px);
           -webkit-transform-origin: 50% 50%;
           -transform-origin: 50% 50%;
           text-shadow: 0 1px 0 #000, 
        }
        `;
export const slideInBottom = keyframes`
0%{
    -webkit-transform: translateY(50px);
           -transform: translateY(50px);
    opacity: 0;
}
100%{
    -webkit-transform: translateY(0);
           -transform: translateY(0);
    opacity: 1;
}
`;
export const slideInRight = keyframes`
0%{
    -webkit-transform: translateX(50px);
           -transform: translateX(50px);
    opacity: 0;
}
100%{
    -webkit-transform: translateX(0);
           -transform: translateX(0);
    opacity: 1;
}
`;

