import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getAllProfile } from "../../actions/profile";
import ProfileItem from "../profiles/ProfileItem";

const Profiles = ({ getAllProfile, profile: { profiles, loading } }) => {
  useEffect(() => {
    getAllProfile();
  }, [getAllProfile]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop">
              Browse and connect with Developers
            </i>
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found</h4>
            )}
          </div>
        </>
      )}
    </>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getAllProfile })(Profiles);
