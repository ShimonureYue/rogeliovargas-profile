import styled, { keyframes } from 'styled-components';
import { white, red, whiteDark, darkRed } from '@/app/colors';

const noiseBefore = keyframes`
0% {
  clip: rect(61px, 9999px, 52px, 0);
}
5% {
  clip: rect(33px, 9999px, 144px, 0);
}
10% {
  clip: rect(121px, 9999px, 115px, 0);
}
15% {
  clip: rect(144px, 9999px, 162px, 0);
}
20% {
  clip: rect(62px, 9999px, 180px, 0);
}
25% {
  clip: rect(34px, 9999px, 42px, 0);
}
30% {
  clip: rect(147px, 9999px, 179px, 0);
}
35% {
  clip: rect(99px, 9999px, 63px, 0);
}
40% {
  clip: rect(188px, 9999px, 122px, 0);
}
45% {
  clip: rect(154px, 9999px, 14px, 0);
}
50% {
  clip: rect(63px, 9999px, 37px, 0);
}
55% {
  clip: rect(161px, 9999px, 147px, 0);
}
60% {
  clip: rect(109px, 9999px, 175px, 0);
}
65% {
  clip: rect(157px, 9999px, 88px, 0);
}
70% {
  clip: rect(173px, 9999px, 131px, 0);
}
75% {
  clip: rect(62px, 9999px, 70px, 0);
}
80% {
  clip: rect(24px, 9999px, 153px, 0);
}
85% {
  clip: rect(138px, 9999px, 40px, 0);
}
90% {
  clip: rect(79px, 9999px, 136px, 0);
}
95% {
  clip: rect(25px, 9999px, 34px, 0);
}
100% {
  clip: rect(173px, 9999px, 166px, 0);
}
`;

const noiseAfter = keyframes`
  0% {
    clip: rect(26px, 9999px, 33px, 0);
  }
  5% {
    clip: rect(140px, 9999px, 198px, 0);
  }
  10% {
    clip: rect(184px, 9999px, 89px, 0);
  }
  15% {
    clip: rect(121px, 9999px, 6px, 0);
  }
  20% {
    clip: rect(181px, 9999px, 99px, 0);
  }
  25% {
    clip: rect(154px, 9999px, 133px, 0);
  }
  30% {
    clip: rect(134px, 9999px, 169px, 0);
  }
  35% {
    clip: rect(26px, 9999px, 187px, 0);
  }
  40% {
    clip: rect(147px, 9999px, 137px, 0);
  }
  45% {
    clip: rect(31px, 9999px, 52px, 0);
  }
  50% {
    clip: rect(191px, 9999px, 109px, 0);
  }
  55% {
    clip: rect(74px, 9999px, 54px, 0);
  }
  60% {
    clip: rect(145px, 9999px, 75px, 0);
  }
  65% {
    clip: rect(153px, 9999px, 198px, 0);
  }
  70% {
    clip: rect(99px, 9999px, 136px, 0);
  }
  75% {
    clip: rect(118px, 9999px, 192px, 0);
  }
  80% {
    clip: rect(1px, 9999px, 83px, 0);
  }
  85% {
    clip: rect(145px, 9999px, 98px, 0);
  }
  90% {
    clip: rect(121px, 9999px, 154px, 0);
  }
  95% {
    clip: rect(156px, 9999px, 44px, 0);
  }
  100% {
    clip: rect(67px, 9999px, 122px, 0);
  }
`;

export const GlitchTitle = styled.div`
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 10px 0 5px 0;
  color: ${white};
  font-weight: 700;
  font-size: 68px;
  text-shadow: 2px 0 ${red};
  position: relative;
  z-index: 1;

  &:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: -2px;
    width: 100%;
    background-color: transparent;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: ${noiseBefore} 3s infinite linear alternate-reverse;
  }

  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 2px;
    width: 100%;
    background-color: transparent;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: ${noiseAfter} 2s infinite linear alternate-reverse;
  }

  @media (max-width: 840px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 38px;

    &:after, &:before {
      display: none;
    }
  }
`;

export const StartedContent = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  align-items: center;
  position: relative;
`;


export const Subtitle = styled.h2`
  letter-spacing: 0;
  font-weight: 400;
  font-size: 13px;
  color: ${whiteDark};
  :after {
    color: orange;
  }
`;
