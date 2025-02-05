import { Pokemon} from "@typechains";
import { deployments, ethers } from "hardhat";

export const setup = async () => {
  /* signer 설정: admin과 user로 구분한다. */
  const [admin, ...users] = await ethers.getSigners();

  /* 컨트랙트 데이터 설정: deployments.fixture를 통하여 hardhat 환경에 배포된 컨트랙트 정보를 가져온다. */
  await deployments.fixture(["Pokemon"]);
  const contracts = {
    pokemon: await ethers.getContract<Pokemon>("Pokemon"),
  };

  return {
    admin,
    users,
    ...contracts,
  };
};
