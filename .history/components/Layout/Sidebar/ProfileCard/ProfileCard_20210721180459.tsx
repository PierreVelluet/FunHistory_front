import react from "react";
import Image from "next/image"
import {Tooltip, Progress, Dropdown } from "antd";
import {
  PlusCircleFilled,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import classes from "./ProfileCard.module.less"

const ProfileCard = () => {

    return(
        <div className={classes.openProfile}>
        <div
          className={cx(
            classes.cardProfile,
            "d-flex mb-2 justify-content-between"
          )}
        >
          <div className={cx("d-flex")}>
            <div className={classes.avatar}>
              <Image
                src="/Pierre_pro.jpg"
                layout="fill"
                objectFit="cover"
                alt="profile picture"
                unoptimized={process.env.NODE_ENV === "development"}
                className={classes.avatarImage}
              />
            </div>
            <div className={classes.informationContainer}>
              <p>Pierre Velluet</p>
              <p>European</p>
              <p>velluetp@gmail.com</p>
            </div>
            <Dropdown overlay={settingMenu()} placement="bottomRight" arrow>
              <PlusCircleFilled
                spin={gearSpinning}
                onMouseEnter={() => setGearSpinning(true)}
                onMouseLeave={() => setGearSpinning(false)}
                className={classes.plusIcon}
              />
            </Dropdown>
          </div>
        </div>
        <div className={classes.progressContainer}>
          <div className={"d-flex align-items-center"}>
            <p className={cx(classes.romanText, "me-1")}>
              {grades?.[userGrade]?.gradeName}
            </p>
            <Tooltip
              title={
                <div className="d-flex justify-content-center flex-column">
                  {grades?.map((el: Igrade) => {
                    return (
                      <div className="d-flex">
                        <div className={classes.romanInt}>
                          {el?.romanNumber}
                        </div>{" "}
                        <p className={classes.romanText}>{el?.gradeName}</p>{" "}
                      </div>
                    );
                  })}
                </div>
              }
              placement="right"
              color={"#C19434"}
              key={"settings"}
            >
              <QuestionCircleOutlined className={classes.infoGradeIcon} />
            </Tooltip>
          </div>
          <Progress
            status="active"
            showInfo={false}
            trailColor="lightgray"
            strokeColor={{
              "0%": "#FF4838",
              "100%": "green",
            }}
            percent={60}
          />
        </div>
      </div>
    )
}

export default ProfileCard;