'use strict';

function CompanyInfo(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "company-info" },
      React.createElement(
        "div",
        { className: "name" },
        React.createElement("ion-icon", { name: "sparkles" }),
        React.createElement(
          "span",
          null,
          props.name
        )
      ),
      React.createElement(
        "div",
        { className: "address" },
        React.createElement(
          "span",
          null,
          props.address
        )
      ),
      React.createElement(
        "div",
        { className: "attach" },
        React.createElement(
          "span",
          null,
          "Camera adjuster:"
        ),
        React.createElement(
          "div",
          { className: "button" },
          React.createElement("ion-icon", { name: "person-outline" }),
          React.createElement(
            "span",
            null,
            "Attach user"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "additional" },
        React.createElement(
          "div",
          { className: "row border-bottom" },
          React.createElement(
            "div",
            { className: "additional-row-container" },
            React.createElement(
              "div",
              { className: "additional-row" },
              React.createElement(
                "div",
                { className: "column width" },
                React.createElement(
                  "div",
                  { className: "owner" },
                  React.createElement(
                    "span",
                    null,
                    props.ownerName
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "column border-left center" },
                React.createElement(
                  "div",
                  { className: "icon border-bottom" },
                  React.createElement("ion-icon", { name: "call-outline" })
                ),
                React.createElement(
                  "div",
                  { className: "icon" },
                  React.createElement("ion-icon", { name: "mail-outline" })
                )
              ),
              React.createElement(
                "div",
                { className: "column border-left width" },
                React.createElement(
                  "div",
                  { className: "value border-bottom left" },
                  React.createElement(
                    "span",
                    null,
                    props.phone
                  )
                ),
                React.createElement(
                  "div",
                  { className: "value left" },
                  React.createElement(
                    "span",
                    null,
                    props.email
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "additional-row-container border-left" },
            React.createElement(
              "div",
              { className: "additional-row" },
              React.createElement(
                "div",
                { className: "column width" },
                React.createElement(
                  "div",
                  { className: "caption border-bottom first" },
                  React.createElement(
                    "span",
                    null,
                    "Signup Date:"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "caption" },
                  React.createElement(
                    "span",
                    null,
                    "Events:"
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "column border-left width" },
                React.createElement(
                  "div",
                  { className: "value border-bottom" },
                  React.createElement(
                    "span",
                    null,
                    props.signupDate
                  )
                ),
                React.createElement(
                  "div",
                  { className: "value" },
                  React.createElement(
                    "span",
                    null,
                    props.eventsCounter
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "column border-left width" },
                React.createElement(
                  "div",
                  { className: "caption border-bottom" },
                  React.createElement(
                    "span",
                    null,
                    "Cameras:"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "caption" },
                  React.createElement(
                    "span",
                    null,
                    "Employes"
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "column border-left" },
                React.createElement(
                  "div",
                  { className: "value border-bottom" },
                  React.createElement(
                    "span",
                    null,
                    props.camerasCounter
                  )
                ),
                React.createElement(
                  "div",
                  { className: "value" },
                  React.createElement(
                    "span",
                    null,
                    props.employeeCounter
                  )
                )
              )
            )
          )
        )
      )
    ),
    React.createElement(
      "div",
      { className: "planContainer" },
      React.createElement(
        "div",
        { className: "left-corner" },
        React.createElement("div", { className: "corner" })
      ),
      React.createElement(
        "div",
        { className: "caption" },
        React.createElement(
          "span",
          null,
          "Plan:"
        )
      ),
      React.createElement(
        "div",
        { className: "value" },
        React.createElement(
          "span",
          null,
          props.planName
        )
      ),
      React.createElement(
        "div",
        { className: "caption" },
        React.createElement(
          "span",
          null,
          "Paid till:"
        )
      ),
      React.createElement(
        "div",
        { className: "value width" },
        React.createElement(
          "span",
          null,
          props.planStatus
        )
      ),
      React.createElement(
        "div",
        { className: "right-corner" },
        React.createElement("div", { className: "corner" })
      )
    )
  );
}