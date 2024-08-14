package aczg.list.todo;

public enum Status {
    TODO("Todo"),
    DOING("Doing"),
    DONE("Done");

    private String status;

    Status(String status) {
        this.status = status;
    }

    public static Status fromString(String status) {
        for (Status s : Status.values()) {
            if (s.status.equalsIgnoreCase(status)) {
                return s;
            }
        }
        throw new IllegalArgumentException("Invalid status: " + status);
    }
}
