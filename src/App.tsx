import Button from "components/Button/Button";
import { Icon } from "components/Icon";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";
import React from "react";
import {
  ColorCalendulaGoldPalette,
  ColorDaybreakBluePalette,
  ColorDustRedPalette,
  ColorNeutralPalette,
  ColorPolarGreenPalette,
} from "styles/Colors";
import { MarginEnum, PaddingEnum, SizeEnum } from "styles/Spacer";
import "./App.css";

function App() {
  return (
    <div style={{ padding: PaddingEnum["3x"] }}>
      <Title color={ColorDaybreakBluePalette.blue6} textAlign="center">
        UI Components made in by{" "}
        <a
          style={{ color: ColorDaybreakBluePalette.blue10 }}
          href="https://www.linkedin.com/in/wahyu-fatur-rizky/"
          target="_blank"
        >
          Wahyu Fatur Rizki
        </a>
      </Title>

      <div style={{ marginBottom: MarginEnum["5x"] }}>
        <Title level={3} marginBottom={MarginEnum["4x"]} label="Buttons" />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <Title
              level={4}
              marginBottom={MarginEnum["3x"]}
              label="Variant Button"
            />
            <Button.Normal label="Primary Button" />
            <Button.Normal
              marginLeft={MarginEnum["3x"]}
              variant="secondary"
              label="Secondary Button"
            />
            <Button.Normal
              marginLeft={MarginEnum["3x"]}
              variant="dashed"
              label="Dashed Button"
            />
            <Button.Normal
              marginLeft={MarginEnum["3x"]}
              variant="text"
              label="Text Button"
            />
            <Button.Normal
              marginLeft={MarginEnum["3x"]}
              marginBottom={MarginEnum["3x"]}
              variant="link"
              label="Link Button"
            />

            <Title
              level={4}
              marginBottom={MarginEnum["3x"]}
              label="Size Button"
            />

            <Button.Normal size="small" label="Small Button" />
            <Button.Normal
              marginLeft={MarginEnum["3x"]}
              size="default"
              label="Default Button"
            />
            <Button.Normal
              marginLeft={MarginEnum["3x"]}
              marginBottom={MarginEnum["3x"]}
              size="large"
              label="Large Button"
            />

            <Title
              level={4}
              marginBottom={MarginEnum["3x"]}
              label="Loading Button"
            />

            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button.Normal loading label="Button" />

              <Button.Normal
                loading
                marginLeft={MarginEnum["3x"]}
                label="Button Icon"
                icon={
                  <div style={{ marginRight: MarginEnum["1x"] }}>
                    <Icon
                      name="accountCircle"
                      color={ColorNeutralPalette.gray1}
                    />
                  </div>
                }
              />
              <Button.Normal
                loading
                marginLeft={MarginEnum["3x"]}
                variant="secondary"
                label="Button Icon"
                icon={
                  <div style={{ marginRight: MarginEnum["1x"] }}>
                    <Icon
                      name="accountCircle"
                      color={ColorNeutralPalette.gray1}
                    />
                  </div>
                }
              />
              <Button.Normal
                loading
                marginLeft={MarginEnum["3x"]}
                variant="dashed"
                label="Button Icon"
                icon={
                  <div style={{ marginRight: MarginEnum["1x"] }}>
                    <Icon
                      name="accountCircle"
                      color={ColorNeutralPalette.gray1}
                    />
                  </div>
                }
              />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <Title
              level={4}
              marginBottom={MarginEnum["3x"]}
              label="Ghost Button"
            />

            <div
              style={{
                backgroundColor: ColorNeutralPalette.gray6,
                padding: PaddingEnum["3x"],
                marginBottom: MarginEnum["3x"],
              }}
            >
              <Button.Normal ghost label="Primary Button" />
              <Button.Normal
                ghost
                marginLeft={MarginEnum["3x"]}
                variant="secondary"
                label="Secondary Button"
              />
              <Button.Normal
                ghost
                marginLeft={MarginEnum["3x"]}
                variant="dashed"
                label="Dashed Button"
              />
            </div>

            <Title
              level={4}
              marginBottom={MarginEnum["3x"]}
              label="Block Button"
            />

            <Button.Normal
              marginBottom={MarginEnum["3x"]}
              block
              label="Primary Button"
            />
            <Button.Normal
              block
              marginBottom={MarginEnum["3x"]}
              variant="secondary"
              label="Secondary Button"
            />
            <Button.Normal
              marginBottom={MarginEnum["3x"]}
              block
              variant="dashed"
              label="Dashed Button"
            />

            <Title
              label="Icon Button"
              level={4}
              marginBottom={MarginEnum["3x"]}
            />

            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button.Normal
                label="Button Icon"
                icon={
                  <div style={{ marginRight: MarginEnum["1x"] }}>
                    <Icon
                      name="accountCircle"
                      color={ColorNeutralPalette.gray1}
                    />
                  </div>
                }
              />
              <Button.Normal
                marginLeft={MarginEnum["3x"]}
                label="Button Icon"
                variant="secondary"
                icon={
                  <div style={{ marginRight: MarginEnum["1x"] }}>
                    <Icon
                      name="accountCircle"
                      color={ColorDaybreakBluePalette.blue6}
                    />
                  </div>
                }
              />
              <Button.Normal
                marginLeft={MarginEnum["3x"]}
                label="Button Icon"
                variant="dashed"
                icon={
                  <div style={{ marginRight: MarginEnum["1x"] }}>
                    <Icon
                      name="accountCircle"
                      color={ColorDaybreakBluePalette.blue6}
                    />
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Title level={3} marginBottom={MarginEnum["4x"]} label="Typography" />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <Title level={4} marginBottom={MarginEnum["3x"]} label="Title" />

            <Title
              marginBottom={MarginEnum["3x"]}
              label="h1. Wahyu Fatur Rizki"
            />
            <Title
              level={2}
              marginBottom={MarginEnum["3x"]}
              label="h1. Wahyu Fatur Rizki"
            />
            <Title
              level={3}
              marginBottom={MarginEnum["3x"]}
              label="h1. Wahyu Fatur Rizki"
            />
            <Title
              level={4}
              marginBottom={MarginEnum["3x"]}
              label="h1. Wahyu Fatur Rizki"
            />
            <Title
              level={5}
              marginBottom={MarginEnum["3x"]}
              label="h1. Wahyu Fatur Rizki"
            />
          </div>

          <div style={{ width: "50%" }}>
            <Title level={4} marginBottom={MarginEnum["3x"]} label="Text" />

            <Text
              marginBottom={MarginEnum["3x"]}
              type="code"
              label="Wahyu Fatur Rizki (code)"
            />
            <Text
              marginBottom={MarginEnum["3x"]}
              marginTop={MarginEnum["3x"]}
              type="disabled"
              label="Wahyu Fatur Rizki (disabled)"
            />
            <Text
              marginBottom={MarginEnum["3x"]}
              type="keyboard"
              label="Wahyu Fatur Rizki (keyboard)"
            />
            <Text
              marginBottom={MarginEnum["3x"]}
              marginTop={MarginEnum["3x"]}
              type="danger"
              label="Wahyu Fatur Rizki (danger)"
            />
            <Text
              marginBottom={MarginEnum["3x"]}
              type="underline"
              label="Wahyu Fatur Rizki (underline)"
            />
            <Text
              marginBottom={MarginEnum["3x"]}
              marginTop={MarginEnum["3x"]}
              type="warning"
              label="Wahyu Fatur Rizki (warning)"
            />
            <Text
              marginBottom={MarginEnum["3x"]}
              type="delete"
              label="Wahyu Fatur Rizki (delete)"
            />
            <Text
              marginBottom={MarginEnum["3x"]}
              label="Wahyu Fatur Rizki (default)"
              marginTop={MarginEnum["3x"]}
            />
            <Text
              marginBottom={MarginEnum["3x"]}
              type="strong"
              label="Wahyu Fatur Rizki (strong)"
            />
            <Text
              marginBottom={MarginEnum["3x"]}
              marginTop={MarginEnum["3x"]}
              type="success"
              label="Wahyu Fatur Rizki (success)"
            />
            <Text
              marginBottom={MarginEnum["3x"]}
              type="italic"
              label="Wahyu Fatur Rizki (italic)"
            />
            <br />
            <Text
              marginBottom={MarginEnum["3x"]}
              marginTop={MarginEnum["3x"]}
              type="link"
              href="https://www.linkedin.com/in/wahyu-fatur-rizky/"
              target="_blank"
              label="Wahyu Fatur Rizki (link)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
