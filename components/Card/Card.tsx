import React from "react";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Milena } from "@/assets";
import { useTranslationContext } from "@/utils/useTranslations";
import { Icon } from "@iconify/react";

export const UserTwitterCard = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);

  const [currentTime, setCurrentTime] = React.useState<Date>(new Date());


  const { translate } = useTranslationContext();

  function handleLinkedinClick() {
    window.open("https://www.linkedin.com/in/milena-posligua-8a35b2220/", "_blank");
  }

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between bg-transparent ">
        <div className="flex gap-3">
          <Avatar
          classNames={{
            base: " bg-transparent border-s-0 ring-0 ring-transparent ring-offset-0 ring-offset-n-1/10",
          }}
          isBordered radius="full" size="md" src={Milena.src} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Milena Posligua</h4>
            <h5 className="text-small tracking-tight text-default-500">@mile</h5>
          </div>
        </div>
        <Button
          color="primary"
          radius="full"
          size="sm"
          onClick={handleLinkedinClick}
          variant={"solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
         {/* <Icon icon="solar:user-plus-bold" width="1.6em" height="1.6em" /> */}
          {translate("connect_title")}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px text-default-500">
        Cornellà de Llobregat, Cataluña, España
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <p className=" text-default-500">{currentTime.toLocaleString()}</p>
      </CardFooter>
    </Card>
  );
};
