import React, { useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";

export default function CustomTimeline() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector className="p-5"/>
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="sm" src="/assets/user-2.png" alt="user 1"/>
            </TimelineIcon>
            <Typography variant="h6" color="blue-gray">
                Alberto Emmanuel
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-6">
            <Card>
              <CardBody>
                <Typography
                  color="blue-gray"
                  className="mb-2 font-[Rubik,sans-self] inline-flex items-center gap-3"
                >
                  <Icon icon="solar:calendar-outline" />
                  Sun Jun 30 2024
                </Typography>
                <Typography>
                  Contractor initiated dispute milestone ID #61278D
                </Typography>
              </CardBody>
            </Card>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className="p-5"/>
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar size="sm" src="/assets/user-3.png" alt="user 2" />
            </TimelineIcon>
            <Typography variant="h6" color="blue-gray">
                 Jon Massimo
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-6">
            <Card>
              <CardBody>
                <Typography
                  color="blue-gray"
                  className="mb-2 font-[Rubik,sans-self] inline-flex items-center gap-3"
                >
                  <Icon icon="solar:calendar-outline" />
                  Sun Jun 30 2024
                </Typography>
                <Typography>
                    I gave you the full milestone payment, what exactly is this dispute for??
                </Typography>
              </CardBody>
            </Card>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-0 bg-transparent">
              <Avatar size="sm" src="/assets/light-logo-2.svg" alt="user 3" className="object-contain"/>
            </TimelineIcon>
            <Typography variant="h6" color="blue-gray">
                Safeli Support
            </Typography>
          </TimelineHeader>
          <TimelineBody>
          <Card>
              <CardBody>
                <Typography
                  color="blue-gray"
                  className="mb-2 font-[Rubik,sans-self] inline-flex items-center gap-3"
                >
                  <Icon icon="solar:calendar-outline" />
                  Sun Jun 30 2024
                </Typography>
                <Typography>
                    Please Provide further evidence or escalate for Safeli decision
                </Typography>
              </CardBody>
            </Card>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
