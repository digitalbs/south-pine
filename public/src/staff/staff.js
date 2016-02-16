function StaffCtrl(staffResource) {
  this.staffMembers = staffResource.query();
}

module.exports = StaffCtrl;
