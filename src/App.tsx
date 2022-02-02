import Button from "components/Button/Button";
import { Icon } from "components/Icon";
import Image from "components/Image/Image";
import Input from "components/Input/Input";
import Text from "components/Typography/Text";
import Title from "components/Typography/Title";
import React from "react";
import { ColorDaybreakBluePalette, ColorNeutralPalette } from "styles/Colors";
import { BorderRadiusEnum, MarginEnum, PaddingEnum } from "styles/Spacer";
import "./App.css";

function App() {
  return (
    <div style={{ padding: PaddingEnum["3x"] }}>
      <Title color={ColorDaybreakBluePalette.blue6} textAlign="center">
        UI Components made in by{" "}
        <a
          style={{ color: ColorDaybreakBluePalette.blue10 }}
          rel="noreferrer"
          href="https://www.linkedin.com/in/wahyu-fatur-rizky/"
          target="_blank"
        >
          Wahyu Fatur Rizki
        </a>
      </Title>

      <div style={{ marginBottom: MarginEnum["5x"] }}>
        <div
          style={{
            border: `2px solid ${ColorNeutralPalette.gray6}`,
            display: "inline-block",
            padding: PaddingEnum["2x"],
            borderStartEndRadius: PaddingEnum["2x"],
            borderStartStartRadius: PaddingEnum["2x"],
          }}
        >
          <Title level={3} label="Buttons" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: `2px solid ${ColorNeutralPalette.gray6}`,
            padding: PaddingEnum["2x"],
            borderRadius: `${BorderRadiusEnum["0x"]} ${BorderRadiusEnum["2x"]} ${BorderRadiusEnum["2x"]} ${BorderRadiusEnum["2x"]}`,
          }}
        >
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

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: MarginEnum["3x"],
              }}
            >
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
                      color={ColorDaybreakBluePalette.blue6}
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
                      color={ColorDaybreakBluePalette.blue6}
                    />
                  </div>
                }
              />
            </div>

            <Title
              level={4}
              marginBottom={MarginEnum["3x"]}
              label="Disabled Button"
            />

            <Button.Normal
              marginRight={MarginEnum["3x"]}
              disabled
              label="Primary Button (disabled)"
            />

            <Button.Normal
              disabled
              marginRight={MarginEnum["3x"]}
              variant="secondary"
              label="Secondary Button (disabled)"
            />
            <Button.Normal
              disabled
              marginRight={MarginEnum["3x"]}
              variant="dashed"
              label="Dashed Button (disabled)"
            />
            <Button.Normal
              disabled
              marginTop={MarginEnum["3x"]}
              variant="text"
              label="Text Button (disabled)"
            />
            <Button.Normal
              disabled
              marginTop={MarginEnum["3x"]}
              marginRight={MarginEnum["3x"]}
              variant="link"
              label="Link Button (disabled)"
            />
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

      <div style={{ marginBottom: MarginEnum["5x"] }}>
        <div
          style={{
            border: `2px solid ${ColorNeutralPalette.gray6}`,
            display: "inline-block",
            padding: PaddingEnum["2x"],
            borderStartEndRadius: PaddingEnum["2x"],
            borderStartStartRadius: PaddingEnum["2x"],
          }}
        >
          <Title level={3} label="Typography" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: `2px solid ${ColorNeutralPalette.gray6}`,
            padding: PaddingEnum["2x"],
            borderRadius: `${BorderRadiusEnum["0x"]} ${BorderRadiusEnum["2x"]} ${BorderRadiusEnum["2x"]} ${BorderRadiusEnum["2x"]}`,
          }}
        >
          <div style={{ width: "50%" }}>
            <Title level={4} marginBottom={MarginEnum["3x"]} label="Title" />

            <Title
              marginBottom={MarginEnum["3x"]}
              label="h1. Wahyu Fatur Rizki"
            />
            <Title
              level={2}
              marginBottom={MarginEnum["3x"]}
              label="h2. Wahyu Fatur Rizki"
            />
            <Title
              level={3}
              marginBottom={MarginEnum["3x"]}
              label="h3. Wahyu Fatur Rizki"
            />
            <Title
              level={4}
              marginBottom={MarginEnum["3x"]}
              label="h4. Wahyu Fatur Rizki"
            />
            <Title
              level={5}
              marginBottom={MarginEnum["3x"]}
              label="h5. Wahyu Fatur Rizki"
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

      <div style={{ marginBottom: MarginEnum["5x"] }}>
        <div
          style={{
            border: `2px solid ${ColorNeutralPalette.gray6}`,
            display: "inline-block",
            padding: PaddingEnum["2x"],
            borderStartEndRadius: PaddingEnum["2x"],
            borderStartStartRadius: PaddingEnum["2x"],
          }}
        >
          <Title level={3} label="Image" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: `2px solid ${ColorNeutralPalette.gray6}`,
            padding: PaddingEnum["2x"],
            borderRadius: `${BorderRadiusEnum["0x"]} ${BorderRadiusEnum["2x"]} ${BorderRadiusEnum["2x"]} ${BorderRadiusEnum["2x"]}`,
          }}
        >
          <div style={{ width: "50%" }}>
            <Title level={4} marginBottom={MarginEnum["3x"]} label="Basic" />

            <Image
              marginBottom={MarginEnum["3x"]}
              src="https://yt3.ggpht.com/ytc/AKedOLQxDeFSWxm0J_eZXpTQ3A5sEH6qKJTIEFQ_Qq8vDQ=s900-c-k-c0x00ffffff-no-rj"
            />

            <Title
              level={4}
              marginBottom={MarginEnum["3x"]}
              label="Placeholder"
            />

            <Image />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: MarginEnum["5x"] }}>
        <div
          style={{
            border: `2px solid ${ColorNeutralPalette.gray6}`,
            display: "inline-block",
            padding: PaddingEnum["2x"],
            borderStartEndRadius: PaddingEnum["2x"],
            borderStartStartRadius: PaddingEnum["2x"],
          }}
        >
          <Title level={3} label="Input" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: `2px solid ${ColorNeutralPalette.gray6}`,
            padding: PaddingEnum["2x"],
            borderRadius: `${BorderRadiusEnum["0x"]} ${BorderRadiusEnum["2x"]} ${BorderRadiusEnum["2x"]} ${BorderRadiusEnum["2x"]}`,
          }}
        >
          <div style={{ width: "50%" }}>
            <Title level={4} marginBottom={MarginEnum["3x"]} label="Basic" />

            <Input label="Name" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
