import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as S from "styles/components/header/style";
import Fade from "react-awesome-reveal";
export default function Header(props: {
  isMobile: boolean;
  initialColor: boolean;
}) {
  const [click, setClick] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [fullscreen, setFullscreen] = useState<number>();
  const router = useRouter();
  const menuClick = () => {
    setClick(!click);
    console.log(click);
  };

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    setFullscreen(window.innerHeight);
    window.addEventListener("scroll", updateScroll);
  }, []);
  return (
    <div>
      {fullscreen && (
        <S.HeaderContainer
          scroll={
            scrollPosition > fullscreen || props.initialColor ? true : false
          }
        >
          {/* {props.isMobile && ( */}
          <S.HeaderWrapper>
            <div style={{ width: "5rem" }}></div>
            <S.Logo
              color={
                scrollPosition > fullscreen || props.initialColor
                  ? "black"
                  : "transparent"
              }
              click={click}
              onClick={() => {
                router.push("/");
              }}
            >
              DAOOM
            </S.Logo>
            <S.HamburgerContainer
              onClick={() => {
                setClick(!click);
                console.log(click);
              }}
              click={click}
              color={
                scrollPosition > fullscreen || props.initialColor
                  ? "black"
                  : "white"
              }
            >
              <span></span>
              <span></span>
              <span></span>
            </S.HamburgerContainer>
          </S.HeaderWrapper>
          {/* )} */}

          <S.HeaderPage click={click}>
            {click && (
              <S.MenuContainer isMobile={props.isMobile}>
                <div
                  onClick={() => {
                    router.push("/story");
                  }}
                >
                  Story
                </div>
                <div
                  onClick={() => {
                    router.push("/signature");
                  }}
                >
                  Signature Image
                </div>
                <div
                  onClick={() => {
                    router.push("/detail");
                  }}
                >
                  Detail
                </div>
                <div>Contact</div>
              </S.MenuContainer>
            )}
          </S.HeaderPage>
        </S.HeaderContainer>
      )}
    </div>
  );
}
