import * as React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { PageSlideFade, StaggerChildren } from "./page-transitions";
import { repositories } from "data/repositories";
import RepositoryCard from "./offline-data-card";
import { MotionBox } from "./motion";

const OfflineData = () => {
  return (
    <PageSlideFade>
      <StaggerChildren>
        <SimpleGrid columns={[2, 2, 3]} spacing={4} mt={12}>
          {repositories.map((repo, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <RepositoryCard
                key={index}
                title={repo.title}
                cover={repo.cover}
                blurHash={repo.blurHash}
                technologies={repo.technologies}
                url={repo.url}


              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default OfflineData;
