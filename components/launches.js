import Link from "next/link";
export const Launches = (props) => {
  return (
    <div>
      {props.data.map((launch) => {
        return (
          <Link
            as={`/launches/${launch.flight_number}`}
            href={"/launches/[flight_number]"}
          >
            <div>
              {launch.mission_name}
              <br />
              {launch.launch_year}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
